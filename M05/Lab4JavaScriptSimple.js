function errorCondition(errorCode) {
    if (errorCode == 0) {
        errorCode = "";
    }
    else if (errorCode == 1) {
        errorCode = "Warning: Last input resulted in negative balance. Recommended to click undo";
    }
    else if (errorCode == 2) {
        errorCode = "is less than zero and not a valid input.";
    }
    else if (errorCode == 3) {
        errorCode = "Input is zero or not a number. No change is required.";
    }
    else if (errorCode == 4) {
        errorCode = "Input Can not be zero or negative.";
    }
    else if (errorCode == 5) {
        errorCode = "Undo is not possible";
    }
    else if (errorCode == 6) {
        errorCode = "Value is less than or equal to zero. No change required.";
    }
    else if (errorCode == 7) {
        errorCode = "Reciept name can only contain A-Z characters + spaces.";
    }
    else {
        errorCode = "An unknown error has occoured. Please report this to the programmer";
    }

    return errorCode;
}

function dataInit () {
    tableValue = 0
    lastChange = 0
    tableItemList = ""
    tableItemIndex = 0
    undoAllow = false

    changeDis.innerText = "";
    tableValueDis.innerText = tableValue
    tableValueChange.innerText = lastChange;
    bill.innerText = tableItemList;
    negBalWarn.innerText = errorCondition(0)
    calcWarn.innerText = errorCondition(0)
    tablePriceWarn.innerText = errorCondition(0);
    tableQtyWarn.innerText = errorCondition(0);
    undoWarn.innerText = errorCondition(0);
}

function resetAll() {
    dataInit()
    resetWarn.innerText = "Reset successful"
}

function validText() {
    var keepGoing = true
    nameWarn.innerText = errorCondition(0);
    var userInput = document.getElementById("userText").value;
    for (var i = 0; i < userInput.length; i++) {
        var character = userInput.charAt(i)

        if (character >= "a" && character <= "z" 
            || character >= "A" && character <= "Z"
            || character == " ") {
        }
        else {
            nameWarn.innerText = errorCondition(7);
            keepGoing = false
        }
    }
    if (keepGoing = true) {
        return (userInput)
    }
}

function changeCalc() {
    if (tableValue > 0) {
        let dollar100 = 0;
        let dollar050 = 0;
        let dollar020 = 0;
        let dollar010 = 0;
        let dollar005 = 0;
        let dollar001 = 0;
        let coin25 = 0;
        let coin10 = 0;
        let coin05 = 0;
        let coin01 = 0;
        let changeOut = "";

        changeOut = changeOut + validText() + "\n";
        balTop = tableValue % 100;
        dollar100 = (tableValue - balTop) / 100;
        tableValue = tableValue - (dollar100 * 100);
        if (dollar100 > 0) {
            changeOut = changeOut + `Hundreds: ${dollar100}\n`;
        }

        balTop = tableValue % 50;
        dollar050 = (tableValue - balTop) / 50;
        tableValue = tableValue - (dollar050 * 50);
        if (dollar050 > 0) {
            changeOut = changeOut + `Fifties: ${dollar050}\n`;
        }

        balTop = tableValue % 20;
        dollar020 = (tableValue - balTop) / 20;
        tableValue = tableValue - (dollar020 * 20);
        if (dollar020 > 0) {
            changeOut = changeOut + `Twenties: ${dollar020}\n`
        }

        balTop = tableValue % 10;
        dollar010 = (tableValue - balTop) / 10;
        tableValue = tableValue - (dollar010 * 10);
        if (dollar010 > 0) {
            changeOut = changeOut + `Tens: ${dollar010}\n`;
        }

        balTop = tableValue % 5;
        dollar005 = (tableValue - balTop) / 5;
        tableValue = tableValue - (dollar005 * 5);
        if (dollar005 > 0) {
            changeOut = changeOut + `Fives: ${dollar005}\n`;
        }

        balTop = tableValue % 1;
        dollar001 = (tableValue - balTop) / 1;
        tableValue = tableValue - (dollar001 * 1);
        if (dollar001 > 0) {
            changeOut = changeOut + `Dollars: ${dollar001}\n`;
        }

        balTop = tableValue % 0.25;
        coin25 = (tableValue - balTop) / 0.25;
        tableValue = tableValue - (coin25 * 0.25);
        if (coin25 > 0) {
            changeOut = changeOut + `Quarters: ${coin25}\n`;
        }

        balTop = tableValue % 0.10;
        coin10 = (tableValue - balTop) / 0.10;
        tableValue = tableValue - (coin10 * 0.10);
        if (coin10 > 0) {
            changeOut = changeOut + `Dimes: ${coin10}\n`;
        }

        balTop = tableValue % 0.05;
        coin05 = (tableValue - balTop) / 0.05;
        tableValue = tableValue - (coin05 * 0.05);
        if (coin05 > 0) {
            changeOut = changeOut + `Nickels: ${coin05}\n`;
        }

        balTop = tableValue % 0.01;
        coin01 = ((tableValue - balTop) / 0.01);
        if (coin01 > 0) {
            changeOut = changeOut + `Pennys: ${coin01}\n`;
        }

        changeDis.innerText = changeOut;
    }
    else{
        calcWarn.innerText = errorCondition(6);
    }
        
}

function numDefined(numInput) {
    if (numInput != "") {
        numInput = true;
    }
    else {
        numInput = false;
    }
    return numInput;
}

function tableData() {
    resetWarn.innerText = "";
    var keepGoing = true;
    var mathFunction = document.getElementById("mathFunction").value;
    var mathValue = document.getElementById("userNum2").value;
    var mathQty = document.getElementById("userNum3").value;

    if (mathValue <= 0) {
        tablePriceWarn.innerText = errorCondition(4);
        keepGoing = false;
    }
    if (mathQty <= 0) {
        tableQtyWarn.innerText = errorCondition(4);
        keepGoing = false;
    }

    if (keepGoing == true) {
        negBalWarn.innerText = errorCondition(0);
        newValue = tableDataMath(mathFunction, mathValue, mathQty, tableValue);
        lastChange = newValue - tableValue;
        tableItemIndex = tableItemIndex + 1;
        tableItemList = tableItemList + `${tableItemIndex}\t- -\tUnit: $${mathValue}\tQty: x${mathQty}\tTotal: $${lastChange} \n`;
        tableValue = newValue;
        undoAllow = true;

        if (tableValue < 0) {
            negBalWarn.innerText = errorCondition(1);
            tableValueDis.innerText = tableValue;
        }

        if (tableValue >= 0) {
            tableValueDis.innerText = tableValue;
            tableValueWarn.innerText = errorCondition(0);
        }

        tableValueChange.innerText = lastChange;
        bill.innerText = tableItemList;

        calcWarn.innerText = errorCondition(0)
        tablePriceWarn.innerText = errorCondition(0);
        tableQtyWarn.innerText = errorCondition(0);
        undoWarn.innerText = errorCondition(0);
    }
}

function dataUndo() {
    if (undoAllow == true) {
        var mathFunction = document.getElementById("mathFunction").value;
        var mathValue = document.getElementById("userNum2").value;
        var mathQty = document.getElementById("userNum3").value;

        tableItemList = tableItemList + `${-tableItemIndex}\t- -\tUnit: -$${mathValue}\tQty: x${mathQty}\tTotal: -$${lastChange} \n`;
        reCalc = (tableDataMath(mathFunction, mathValue, mathQty, 0));
        tableValue = tableValue + (-1 * reCalc);


        bill.innerText = tableItemList;
        tableValueChange.innerText = lastChange * (-1);
        tableValueDis.innerText = tableValue;
        
        undoAllow = false;
        undoWarn.innerText = errorCondition(0);
        negBalWarn.innerText = errorCondition(0);
    }
    else {
        undoWarn.innerText = errorCondition(5);
    }

}

function tableDataValid() {
    var mathValue = document.getElementById("userNum2").value;
    var mathQty = document.getElementById("userNum3").value;

    mathValue = numDefined(mathValue);
    mathQty = numDefined(mathQty);
}

function tableDataMath(mathFunction, mathValue, mathQty, tableValue) {
    if (mathFunction == "add") {
        tableValue = tableValue + (mathValue * mathQty);
    }
    else if (mathFunction == "sub") {
        tableValue = tableValue - (mathValue * mathQty);
    }
    return tableValue;
}
