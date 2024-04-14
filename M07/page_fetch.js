window.addEventListener('DOMContentLoaded', (function() {
    var contents;
    var protocol;
    var hostName;
    var directory;

    var TOC_TAG = "fetch_page_TOC";


    function parseBase() {
        var remainder;
        var pos, slashPos;

        var pos = BASE.indexOf('://');
        protocol = BASE.substr(0, pos);
        remainder = BASE.substr(pos + 3);
        slashPos = remainder.indexOf('/');

        if (slashPos === -1) {
            hostname = remainder;
            directory = "";
            file = "";
        }
        else {
            hostName = remainder.substr(0, slashPos);
            remainder = remainder.substr(slashPos + 3);
            slashPos = remainder.lastIndexOf('/');
            if (slashPos === -1) {
                directory = "";
                file = remainder;
            }
            else {
                directory = remainder.substr(0, slashPos);
                file = remainder.substr(slashPos + 1);
            }
        }
    }


    function relativeToAbsolute(url) {
        if (url.indexOf('://') > -1) {
            return url;
        }
        else if (url[0] === "/") {
            return protocol + "://" + hostName + url;
        }
        else {
            if (directory === "") {
                return protocol + "://" + hostName + "/" + url;
            }
            else { 
                return protocol + "://" + hostName + "/" + directory + "/" + url;
            }
        }
    }


    function pageParse() {
        var parse = new DOMParser();
        contents = parse.parseFromString(atob(PAGE), "text/html");
        console.log(contents);
    }


    function moveChildren(source, desitination) {
        while (source.childNodes.length > 0) {
            var child = source.childNodes[0];
            source.removeChild(child);
            if (child.tagName === 'SCRIPT') {
                var node = document.createElement('script');

                if (child.getAttribute('src')) {
                    node.setAttribute('src', child.getAttribute('src'));
                }
                else {
                    node.setAttribute('src', 'data:text/javascript;base64,' + btoa(child.innerText));
                }
                
                desitination.appendChild(node);
            }
            else {
                desitination.appendChild(child);
                }
            
        }
    }


    function fixTags(tagName, attribute) {
        var tags = contents.getElementsByTagName(tagName);
        
        for (var i = 0; i < tags.length; i++) {
            var url = tags[i].getAttribute(attribute);
            if (url) {
                tags[i].setAttribute(attribute, relativeToAbsolute(url));
            }
        }
    }


    function fixReDirTags(tagName, attribute) {
        var tags = contents.getElementsByTagName(tagName);
        
        for (var i = 0; i < tags.length; i++) {
            var url = tags[i].getAttribute(attribute);
            if (url) {
                tags[i].setAttribute(attribute, window.location.origin + window.location.pathname + '?url=' + encodeURIComponent(relativeToAbsolute(url)));
            }
        }
    }


    function resolveUrlError() {
        fixTags("img", "src");
        fixTags("script", "src");
        fixTags("link", "href");
        fixReDirTags("a", "href");
    }


    function constructTOC() {
        var levels= [0];
        var headers = [];
        var numHeaders = 0;


        function scrapeText(node) {
            if (node.nodeType === document.TEXT_NODE) {
                return node.nodeValue;
            }
            else {
                var result = ""
                for (var i =0; i < node.childNodes.length; i++) {
                    result += ' ' + scrapeText(node.childNodes[i]);
                }
                return result;
            }
        }


        function addListItem(node, level) {
            var child = document.createElement('li');
            var anchor = document.createElement('a');

            anchor.href = '#' + TOC_TAG + '_' + numHeaders;
            child.appendChild(anchor);
            anchor.innerText = scrapeText(node);

            var span = document.createElement('span');
            span.id = TOC_TAG + '_' + numHeaders;

            node.insertBefore(span, node.childNodes[0]);

            anchor = document.createElement('a');
            anchor.href = '#' + TOC_TAG;
            anchor.innerText = '^';

            node.parentNode.insertBefore(anchor, node);
            headers[headers.length - 1].appendChild(child);
            numHeaders = numHeaders + 1;
        }


        function addLevel(node, level) {
            var child = document.createElement('ul');
            if (headers.length > 0) {
                headers[headers.length - 1].appendChild(child);

            }
            headers.push(child);
            addListItem(node)
            levels.push(level);
        }


        function removeLevel() {
            headers.pop();
            levels.pop();
        }


        function checkNode(node) {
            if (node != undefined) {
                if (node.nodeType != document.ELEMENT_NODE) {
                    return;
                }
                if (node.tagName[0] === "H" && node.tagName[1] >= "1" && node.tagName[1] <= "6") {
                    var level = Number(node.tagName[1]);
                    var currentLevel = levels[levels.length - 1];

                    if (level > currentLevel) {
                        addLevel(node, level);
                    }
                    else if (level === currentLevel) {
                        addListItem(node);
                    }
                    else if (level < currentLevel) {
                        while (level < currentLevel) {
                            removeLevel(node);
                            currentLevel = levels[levels.length - 1];
                        }
                        checkNode(node);
                    }
                    console.log(node.innerText);
                }
                var children = [].slice.call(node.childNodes);
                for (var i = 0; i < node.childNodes.length; i++) {
                    checkNode(children[i]);
                }
            }
        }

        checkNode(contents.body);
        while (levels.length > 1) {
            removeLevel();
        }

        checkNode(contents.body);
        var begin = document.createElement('span');
        begin.id = TOC_TAG;
        document.getElementById('toc').appendChild(begin)
        if (headers[0]) {
            document.getElementById('toc').appendChild(headers[0]);
        }
    }


    function contentMove() {
        moveChildren(contents.head, document.head);
        moveChildren(contents.body, document.getElementById('contents'));
        var anchor = document.createElement('a');
        anchor.href = '#' + TOC_TAG;
        anchor.innerText = "Return to top of page"
        document.getElementById('contents').appendChild(anchor);
    }


    function submit() {
        console.log("Submitted!!! ", encodeURIComponent(document.getElementById('urlBox').value));
        window.location.href = window.location.origin + window.location.pathname + "?url=" + encodeURIComponent(document.getElementById('urlBox').value);
    }


    function addEventListener() {
        document.getElementById('goButton').addEventListener('click', submit);
        document.getElementById('urlBox').addEventListener('keydown', function(event) {
            if (event.keyCode === 13 || event.keyCode === 10) {
                submit();
            } 
        });
    }


    return function() {  
        parseBase()
        pageParse();
        resolveUrlError();
        constructTOC();
        contentMove();
        addEventListener();
    }


})())