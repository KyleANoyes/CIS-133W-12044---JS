function QuestionParent(title, text) {
    // Always require title and text, sub/misc are supplaments
    this.title = title;
    this.text = text;

    this.toHTML = function() {
        var output = "";

        output += "<h1>" + this.title + "</h1>\n";
        output += "<p>" + this.text + "</p>\n";

        return output;
    }
}


function QuestionMultiChoice(title, text, questionList) {
    QuestionParent.call(this, title, text)

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<ol type="a">\n';
        for (var i = 0; i < questionList.length; i++) {
            if (questionList[i] == "userInputOther")
                output += '<li><input type="radio" name="' + title + '" value="' + questionList[i] + '">' + questionList[i] + '</li>\n';
        }
        output += '</ol>\n';
        return output;
    }
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
    }

    QuestionMultiChoice.call(this, title, text, listQuestion)

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        // Add indexed other
        for (var i = 0; i < listQuestionIndex.length; i++ ) {
            output += '<li><input type="checkbox" name="' + title + '" value="' + listQuestionIndext[i] + '">' + listQuestionIndex[i] + '</li>\n';
            
        }
        // Add non-indexed other
        for (var i = 0; i < listOther.length; i++ ) {
            output += '<p>' + listOther[i] +'<br><input type="text" name="Other"></p>\n';
        }

        return output;
    }
}


function QuestionMultiSelect(title, text, questionList) {
    QuestionParent.call(this, title, text)

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<ol type="a">\n';
        for (var i = 0; i < questionList.length; i++) {
            output += '<li><input type="checkbox" name="' + title + '" value="' + questionList[i] + '">' + questionList[i] + '</li>\n';
        }
        output += '</ol>\n';
        return output;
    }
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
    }

    QuestionMultiSelect.call(this, title, text, listQuestion)

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        // Add indexed other
        for (var i = 0; i < listQuestionIndex.length; i++ ) {
            output += '<li><input type="checkbox" name="' + title + '" value="' + listQuestionIndext[i] + '">' + listQuestionIndex[i] + '</li>\n';
            
        }
        // Add non-indexed other
        for (var i = 0; i < listOther.length; i++ ) {
            output += '<p>' + listOther[i] +'<br><input type="text" name="Other"></p>\n';
        }

        return output;
    }
}


function QuestionShortAnswerAny(title, text) {
    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<p>Type answer here <input type="text" name="' + title + '"></p>\n';

        return output;
    }
}


function QuestionShortAnswerNum(title, text) {
    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var output = superToHTML.call(this);

        output += '<p>Type answer here<input type="number" name="' + title + '"></p>\n';

        return output;
    }
}


function QuestionSection(title, questionBank) {
    this.toHTML = function() {
        var output = "<h2>" + title + "</h2>\n";

        for (var i = 0; i < questionBank.length; i++) {
            output += questionBank[i].toHTML();
        }

        return output;
    }
}