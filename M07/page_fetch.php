<?php
    $url = isset($_GET['url']) ? $_GET['url'] : "https://eloquentjavascript.net/";
    $contents = base64_encode(mb_convert_encoding(file_get_contents($url), "HTML-ENTITIES", "UTF-8"));
?>
<!doctype html>
<html>
    <head>
        <title>This is a page to fetch data with</title>
        <link rel="stylesheet" href="page_fetch.css">
        <script src="page_fetch.js"></script>
        <script>
            var BASE = "<?php echo $url; ?>";
            var PAGE = "<?php echo $contents; ?>";
        </script>
    </head>
    <body>
        <div id="searchBox">Type a url here: <input type="text" id="urlBox"> <span id="goButton">SEND IT!</span></div>
        <div id="tocContainer">
            <div id="toc"></div>
        </div>
        <div id="content"></div>

        <p id="contents"></p>
    </body>
</html>