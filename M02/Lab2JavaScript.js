//***************************************************************************************************
//
// This is the holding file for me to build and test my JavaScript before placing it into the HTML
// Unsure if this should be included in the submission, but standardized my workflow so including
// it for now
//
//***************************************************************************************************

//Problem A - What are the types of the following pieces of data: "", 0, 1, "0", "1", [], {}, null, undefined, NaN, Infinity, console, console.log, document, document.write, true, false.
//I do not like how this is structured, but it's good enough for testing and doesn't use future concepts
let prob1Header = " is a:"
let prob1StrA = ('""' + prob1Header);
let prob1CaseA = typeof ("");
let prob1StrB = ('0' + prob1Header);
let prob1CaseB = typeof (0);
let prob1StrC = ('1' + prob1Header);
let prob1CaseC = typeof (1);
let prob1StrD = ('"0' + prob1Header);
let prob1CaseD = typeof ('0');
let prob1StrE = ('"1"' + prob1Header);
let prob1CaseE = typeof ('1');
let prob1StrF = ('[]' + prob1Header);
let prob1CaseF = typeof ([]);
let prob1StrG = ('{}' + prob1Header);
let prob1CaseG = typeof ({});
let prob1StrH = ('null' + prob1Header);
let prob1CaseH = typeof (null);
let prob1StrI = ('undefined' + prob1Header);
let prob1CaseI = typeof (undefined);
let prob1StrJ = ('NaN' + prob1Header);
let prob1CaseJ = typeof (NaN);
let prob1StrK = ('Infinity' + prob1Header);
let prob1CaseK = typeof (Infinity);
let prob1StrL = ('console' + prob1Header);
let prob1CaseL = typeof (console);
let prob1StrM = ('consoel.log' + prob1Header);
let prob1CaseM = typeof (console.log);
let prob1StrN = ('document' + prob1Header);
let prob1CaseN = typeof (document);
let prob1StrO = ('document.write' + prob1Header);
//let prob1CaseO = typeof (document.write);
let prob1StrP = ('true' + prob1Header);
let prob1CaseP = typeof (true);
let prob1StrQ = ('false' + prob1Header);
let prob1CaseQ = typeof (false);

console.log("There are a lot of data types in JavaScript, some more important than others")
console.log("Lets begin by reviewing the following data types: ")

//fix the 3rd to last when out of node.js
//This isn't a bad solution, but definitely needs to be replaced by a loop
console.log(prob1StrA, "\n", prob1StrB, "\n", prob1StrC, "\n", prob1StrD, "\n", prob1StrE, "\n", prob1StrF);
console.log(prob1StrG, "\n", prob1StrH, "\n", prob1StrI, "\n", prob1StrJ, "\n", prob1StrK, "\n", prob1StrL);
console.log(prob1StrM, "\n" ,prob1StrN, "\n", "function - probl1StrO", "\n", prob1StrP, "\n", prob1StrQ);


//Problem B - For the five elementary arithmetic operations (-, +, *, /, %), when given two strings like "2" and "5", or one string and one number, like "2" and 5 or 2 and "5", what are the results?
//Prep the calcs here, lets call them later
//Str1 = String first; Str2 = String second, SB = String both
let prob2AddStr1 = "4" + 9;
let prob2AddStr2 = 3 + "7";
let prob2AddStrB = "2" + "5";
let prob2SubStr1 = "4" - 9;
let prob2SubStr2 = 3 - "7";
let prob2SubStrB = "2" - "5";
let prob2MultStr1 = "4" * 9;
let prob2MultStr2 = 3 * "7";
let prob2MultStrB = "2" * "5";
let prob2DivStr1 = "4" / 9;
let prob2DivStr2 = 3 / "7";
let prob2DivStrB = "2" / "5";
let prob2PercStr1 = "4" % 9;
let prob2PercStr2 = 3 % "7";
let prob2PercStrB = "2" % "5";

//Problem C - //Is 10 + 5 % 2 the same as (10 + 5) % 2, or 10 + (5 % 2)? How about 10 * 5 % 2?
//This is not a good solution. I would 
let prob3Calc1 = 10 + 5 % 2;
let prob3Calc1Str = "10 + 5 % 2";
let prob3Calc2 = (10 + 5) % 2;
let prob3Calc2Str = "(10 + 5) % 2";
let prob3Calc3 = 10 + (5 % 2);
let prob3Calc3Str = "10 + (5 % 2)";
let prob3Calc4 = 10 * 5 % 2;
let prob3Calc4Str = "10 * 5 % 2";


//Problem D - Is 0 == 1 ? "fish" : "duck" the same as (0 == 1) ? "fish" : "duck", or 0 == (1 ? "fish" : "duck")?
let prob4Calc1 = 0 == 1 ? "fish" : "duck";
let prob4Calc1Str = ('0 == 1 ? "fish" : "duck"');
let prob4Calc2 = (0 == 1) ? "fish" : "duck";
let prob4Calc2Str = ('(0 == 1) ? "fish" : "duck"');
let prob4Calc3 = 0 == (1 ? "fish" : "duck");
let prob4Calc3Str = ('0 == (1 ? "fish" : "duck")');

//Problem E - Which of these values are truthy and which are falsy: 0, 1, 2, "0", "1", "2", "cow", "", null, undefined, NaN, Infinity, [], [0], {}, {vegetable: "cabbage"}.
let prob5Boo01 = new Boolean(0);
let prob5Boo01Str = ('0');
let prob5Boo02 = new Boolean(1);
let prob5Boo02Str = ('1');
let prob5Boo03 = new Boolean(2);
let prob5Boo03Str = ('2');
let prob5Boo04 = new Boolean("0");
let prob5Boo04Str = ('"0"');
let prob5Boo05 = new Boolean("1");
let prob5Boo05Str = ('"1"');
let prob5Boo07 = new Boolean("cow");
let prob5Boo07Str = ('"cow"');
let prob5Boo08 = new Boolean("");
let prob5Boo08Str = ('""');
let prob5Boo09 = new Boolean(null);
let prob5Boo09Str = ('null');
let prob5Boo10 = new Boolean(undefined);
let prob5Boo10Str = ('undefined');
let prob5Boo11 = new Boolean(NaN);
let prob5Boo11Str = ('NaN');
let prob5Boo12 = new Boolean(Infinity);
let prob5Boo12Str = ('Infinity');
let prob5Boo13 = new Boolean([]);
let prob5Boo13Str = ('[]');
let prob5Boo14 = new Boolean([0]);
let prob5Boo14Str = ('[0]');
let prob5Boo15 = new Boolean({});
let prob5Boo15Str = ('{}')
let prob5Boo16 = new Boolean({vegetable: "cabbage"});
let prob5Boo16Str = ('{vegetable: "cabbage"}');

//Problem F - What are the return results from the following expressions: "dog" || "cat" || "cow"; "dog" && "cat" && "cow".
let prob6Res1 = "dog" || "cat" || "cow";
let prob6Res1Str = ('"dog" || "cat" || "cow"');
let prob6Res2 = "dog" && "cat" && "cow";
let prob6Res2Str = ('"dog" && "cat" && "cow"');