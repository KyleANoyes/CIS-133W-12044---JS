function QuestionParent(title, text) {
    this.title = title;
    this.text = text;

    this.toHTML = function() {
        var output = "";

        output += "<h3>" + this.title + "</h3>\n";
        output += "<p>" + this.text + "</p>\n";

        return output;
    };
    this.getAnswers = function() {
        return {};
    };
}


function QuestionMultiChoice(title, text, questionList) {
    QuestionParent.call(this, title, text)

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<ol id="' + title + '" type="a">\n';
        for (var i = 0; i < questionList.length; i++) {
            output += '<li><input type="radio" name="' + title + '" value="' + questionList[i] + '">' + questionList[i] + '</li>\n';
        }
        output += '</ol>\n';
        return output;
    };
    this.getAnswers = function() {
        var answers = {};
        var entry = document.getElementById(title).getElementsByTagName("input");

        for (var i = 0; i < entry.length; i++) {
            answers[entry[i].value] = entry[i].checked;
        }

        return answers;
    };
}


function QuestionMultiChoiceInput(title, text, questionList) {
    QuestionMultiChoice.call(this, title, text, questionList)

    var superToHTML = this.toHTML;
    var superGetAnswers = this.getAnswers;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<p>Other: <input id="' + title + '_other" type="text" name="Other"></p>\n'

        return output;
    };
    this.getAnswers = function() {
        var answers = superGetAnswers.call(this);

        var entry = document.getElementById(title + "_other");
        answers["Other"] = entry.value;
        
        return answers;
    }
}


function QuestionMultiSelect(title, text, questionList) {
    QuestionParent.call(this, title, text)

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        // THIS IS WHAT RUINED MY LAST THREE NIGHTS!! Fixed now, but.... wow, just one mising "
        // TODO - develop python parse to copy paste code into and 
        //     strip back into basic html to catch errors like '<ol id="' + title + 'type="a">\n'
        //                                                                         ^^^^
        output += '<ol id="' + title + '" type="a">\n';
        for (var i = 0; i < questionList.length; i++) {
            output += '<li><input type="checkbox" name="' + title + '" value="' + questionList[i] + '">' + questionList[i] + '</li>\n';
        }
        output += '</ol>\n';
        return output;
    };
    this.getAnswers = function() {
        var answers = {};
        var entry = document.getElementById(title).getElementsByTagName("input");

        for (var i = 0; i < entry.length; i++) {
            answers[entry[i].value] = entry[i].checked;
        }

        return answers;
    };
    
}


function QuestionMultiSelectInput(title, text, questionList) {
    QuestionMultiSelect.call(this, title, text, questionList)

    var superToHTML = this.toHTML;
    var superGetAnswers = this.getAnswers;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<p>Other: <input id="' + title + '_other" type="text" name="Other"></p>\n'

        return output;
    };
    this.getAnswers = function() {
        var answers = superGetAnswers.call(this);

        var entry = document.getElementById(title + "_other");
        answers["Other"] = entry.value;
        
        return answers;
    };
}


function QuestionShortAnswer(title, text, inputType) {
    QuestionParent.call(this, title, text);
    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        // I got very tripped op here as well. I need to find a better way to write these
        //     HTML constructors since it's so dangerous to miss
        output += '<p>Type answer here: <input id="' + title + '" type="' + inputType + '" name="' + title + '"></p>\n';

        return output;
    };
    this.getAnswers = function() {
        var answers = {};

        var output = document.getElementById(title);
        answers[title] = output.value;

        return answers;
    };
}


function QuestionSection(title, questionBank) {
    this.toHTML = function() {
        var output = "<h2>" + title + "</h2>\n";

        for (var i = 0; i < questionBank.length; i++) {
            output += questionBank[i].toHTML();
        }

        output += '<p><input id="submit" type="button" value="Submit survey data"</p>'
        output += '<p><input id="resetAll" type="button" value="Reset survey data"</p>'

        return output;
    };
    this.getAnswers = function() {
        var submission = {}

        for (var i = 0; i < questionBank.length; i++) {
            submission[questionBank[i].title] = questionBank[i].getAnswers();
        }

        return submission;
    };
}


function Survey(title, section) {
    this.toHTML = function() {
        var output = "<h1>" + title + "</h1>\n"
        output += '<input id="submit" type="button" value="SUBMIT">\n';

        for (var i = 0; i < section.length; i++) {
            output += section[i].toHTML();
        }
        
        return output;
    };
    this.getAnswers = function() {
        var submission = {}

        for (var i = 0; i < section.length; i++) {
            submission[section[i].title] = section[i].getAnswers();
        }

        return submission;
    };
}


window.addEventListener("load", function() {
    var questions = createQuestionBank();

    function submit() {
        var answers = questions.getAnswers();
        var form = document.createElement('form');
        form.method = 'POST';
        form.action = 'submitted_answers.php';
        form.innerHTML = '<input type="hidden" name="answers" value="' + encodeURIComponent(JSON.stringify(answers)) + '">';
        document.getElementsByTagName('body')[0].appendChild(form);
        form.submit();
    }
    document.getElementById("surveyQuestions").innerHTML = questions.toHTML();
    document.getElementById("submit").addEventListener("click", submit);
    }
);