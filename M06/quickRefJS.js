function typeCheck(data_1){
    var result = null
    let log_entry = data_1
    if (isNaN(log_entry) == false){
        result = (`${log_entry} is a number`)
    } else if (isNaN(log_entry) == true){
        result = (`${ log_entry} is a string`)
    } else{
        result = (`We have no idea what${ log_entry} is lol`)
    }
    return result
}

function main(){
    //var entry = prompt("Please enter a number or string: ")
    var entry = "e"
    var result = typeCheck(entry)
    console.log(result)
}

main()

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");