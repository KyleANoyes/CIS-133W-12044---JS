function questionOne() {
    var questionData = [
        "Housing Expense",
        "Please select what expenses other than housing you currently pay",
        "Childcare",
        "Public Transportation",
        "School - tuition and books, etc.",
        "Vehicle payment and insurance",
        "School loans",
        "Utilities separate from housing costs",
        "Medical insurance",
        "Credit card or personal loans",
        "userInputNext",
        "Other: "
    ];

    return questionData
}

function questionTwo() {
    var questionData = new QuestionMultiChoice [
        "Occupancy count",
        "Who do you live with? (select all that apply) How many people do you live with total?",
        "Alone",
        "With partner",
        "With Spouse",
        "With Children",
        "With parents",
        "With other family",
        "With roommates",
        "userInputNext",
        "Other: ",
        "TOTAL number of people living in your household including yourself:",
        "userInputNext",
        "Adults: ",
        "userInputNext",
        "Children: "
    ];

    return questionData
}

function questionThree() {
    var questionData = [
        "Gender",
        "What is your gender?",
        "Male",
        "Female",
        "I do not identify with a gender",
        "userInputNext",
        "Other: ",
        "Prefer not to answer"
    ];

    return questionData
}

function questionFour() {
    var questionData = [
        "Income",
        "What is your yearly income? (Please include income from all sources)",
        "Under 10,000",
        "10,000-14,999",
        "15,000-19,999",
        "20,000-24,999",
        "25,000-29,999",
        "30,000-34,999",
        "35,000-39,999",
        "40,000-44,999",
        "45,000-49,999",
        "50,000 and above"
    ];

    return questionData
}

function questionFive() {
    var questionData = [
        "Housing Expense",
        "What location do you primarily spend your time when at PCC? (IF equally split between campuses circle both)",
        "Cascade Campus",
        "Rock Creek Campus",
        "Southeast Campus",
        "Sylvania Campus",
        "Online courses only",
        "Other PCC Center/location"
    ];

    return questionData
}