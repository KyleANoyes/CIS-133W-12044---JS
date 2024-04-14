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
    var listOther = [];
    var listQuestionIndex = [];
    var listQuestion = [];
    for (var i = 0; i < questionList.length; i++) {
        // Check if we need user input, if so, isolate to add later
        if (questionList[i] == "userInputNext") {
            i = i + 1;
            listOther.push(questionList[i]);
        }
        // Check if we need to add as indexed item
        else if (questionList[i] == "userInputNextIndex") {
            i = i + 1;
            listOther.push(questionList[i]);
        }
        // if not, add to general question list. Push to parent
        else {
            listQuestion.push(questionList[i]);
        }
    };

    QuestionMultiChoice.call(this, title, text, listQuestion)

    var superToHTML = this.toHTML;
    var superGetAnswers = this.getAnswers;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        // Add non-indexed other
        for (var i = 0; i < listQuestionIndex.length; i++ ) {
            console.log(title);
            output += '<p>' + listQuestionIndex[i] +'<br><input type="text" id="' + title + '_index_other" name="IndexOther"></p>\n';
        }
        // Add non-indexed other
        for (var i = 0; i < listOther.length; i++ ) {
            output += '<p>' + listOther[i] +'<br><input type="text" id="' + title + '_other" name="Other"></p>\n';
        }

        return output;
    };
    this.getAnswers = function() {
        var answers = superGetAnswers.call(this);

        var entry = document.getElementById(title + "_index_other");
        answers["IndexOther"] = entry.value;

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

        output += '<ol id="' + title + 'type="a">\n';
        for (var i = 0; i < questionList.length; i++) {
            output += '<li><input type="checkbox" name="' + title + '" value="' + questionList[i] + '">' + questionList[i] + '</li>\n';
        }
        output += '</ol>\n';
        return output;
    };
}


function QuestionMultiSelectInput(title, text, questionList) {
    var listOther = [];
    var listQuestionIndex = [];
    var listQuestion = [];
    for (var i = 0; i < questionList.length; i++) {
        // Check if we need user input, if so, isolate to add later
        if (questionList[i] == "userInputNext") {
            i = i + 1;
            listOther.push(questionList[i]);
        }
        // Check if we need to add as indexed item
        else if (questionList[i] == "userInputNextIndex") {
            i = i + 1;
            listOther.push(questionList[i]);
        }
        // if not, add to general question list. Push to parent
        else {
            listQuestion.push(questionList[i]);
        }
    };

    QuestionMultiSelect.call(this, title, text, listQuestion)

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        // Add non-indexed other
        for (var i = 0; i < listQuestionIndex.length; i++ ) {
            output += '<p>' + listQuestionIndex[i] +'<br><input id="' + title + '_index_other" type="text" name="Other"></p>\n';
        }
        // Add non-indexed other
        for (var i = 0; i < listOther.length; i++ ) {
            output += '<p>' + listOther[i] +'<br><input id="' + title + '_other" type="text" name="Other"></p>\n';
        }

        return output;
    };
}


function QuestionShortAnswerAny(title, text) {
    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<p>Type answer here <input type="text" name="' + title + '"></p>\n';

        return output;
    };
}


function QuestionShortAnswerNum(title, text) {
    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<p>Type answer here<input type="number" name="' + title + '"></p>\n';

        return output;
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
}


function submit() {
    console.log("Submitted answer sheet")
}


window.addEventListener("load", function() {
    var questions = createQuestionBank();
    document.getElementById("surveyQuestions").innerHTML = questions.toHTML();
    document.getElementById("submit").addEventListener("click", submit);
    }
);