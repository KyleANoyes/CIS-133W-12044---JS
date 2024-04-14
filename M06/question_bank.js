function createQuestionBank() {
    var questionOne = new QuestionMultiSelectInput(
        "Housing Expense",
        "Please select what expenses other than housing you currently pay",
        [
            "Childcare",
            "Public Transportation",
            "School - tuition and books, etc.",
            "Vehicle payment and insurance",
            "School loans",
            "Utilities separate from housing costs",
            "Medical insurance",
            "Credit card or personal loans",
            "Other: "
        ]
    );

    var questionTwo = new QuestionMultiSelectInput(
        "Occupancy count",
        "Who do you live with? (select all that apply) How many people do you live with total?",
        [
            "Alone",
            "With partner",
            "With Spouse",
            "With Children",
            "With parents",
            "With other family",
            "With roommates",
            "Other living arrangement: ",
        ]
    );


    var questionThree = new QuestionMultiChoiceInput(
        "Gender",
        "What is your gender?",
        [
            "Male",
            "Female",
            "I do not identify with a gender",
            "Prefer not to answer",
            "Other: "
        ]
    );


    var questionFour = new QuestionMultiChoice(
        "Income",
        "What is your yearly income? (Please include income from all sources)",
        [
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
        ]
    );


    var questionFive = new QuestionMultiSelect(
        "Housing Expense",
        "What location do you primarily spend your time when at PCC? (IF equally split between campuses circle both)",
        [
            "Cascade Campus",
            "Rock Creek Campus",
            "Southeast Campus",
            "Sylvania Campus",
            "Online courses only",
            "Other PCC Center/location"
        ]
    );


    var questionSix = new QuestionShortAnswer(
        "Living arrangement changes",
        "How many times have you moved in the past 5 years?",
        "number"
    );


    var questionSeven = new QuestionShortAnswer(
        "Additional information",
        "Is there any additional information you would like to share with us regarding these questions?",
        "text"
    );


    var allQuestions = 
    [
        questionOne, 
        questionTwo, 
        questionThree, 
        questionFour, 
        questionFive,
        questionSix,
        questionSeven,
    ];


    var sectionOne = new QuestionSection("Questions", allQuestions);


    return new Survey("PCC Housing and economics demographic questionaire", allQuestions);
}