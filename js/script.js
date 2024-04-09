// Define constant for array of numbers buttons elements.

const numButtonsElem = document.querySelectorAll(".grey");

console.log("numButtonsElem", numButtonsElem, typeof numButtonsElem);

// Define constant for display element.

const displayElem = document.querySelector(".display-text");

console.log("displayElem", displayElem, typeof displayElem);

// Define constant for array of operators buttons elements.

const opButtonsElem = document.querySelectorAll(".blue");

console.log("opButtonsElem", opButtonsElem, typeof opButtonsElem);

// Define constant for Result button element.

const resultButtonElem = document.getElementById("result");

console.log("resultButtonElem", resultButtonElem, typeof resultButtonElem);

// Define constant for Cancel button element.

const cancButtonElem = document.getElementById("cancel");

console.log("cancButtonElem", cancButtonElem, typeof cancButtonElem);

// Define constant for array of calculation.

let calcArray = [];

console.log("calcArray", calcArray, typeof calcArray);

// Define variable for array of calculation.

let calcVar = "";

console.log("calcVar", calcVar, typeof calcVar);

// Add Event listener to Numbers Buttons

for (let i=0; i<numButtonsElem.length; i++) {

    numButtonsElem[i].addEventListener("click", numToDisplayOnClick);

};

// Add Event listener to Operators Buttons

for (let i=0; i<opButtonsElem.length; i++) {

    opButtonsElem[i].addEventListener("click", opToDisplayOnClick);
    
};

// Add Event listener to Result Button

resultButtonElem.addEventListener("click", function() {

    calcArray.push(calcVar);

    displayElem.textContent = "";

    let result = "";

    console.log("result", result, typeof result);

    if (calcArray[1] === "+") {

        console.log("test +");

        result = parseInt(calcArray[0]) + parseInt(calcArray[2]);

    } else if (calcArray[1] === "-") {

        console.log("test -");

        result = parseInt(calcArray[0]) - parseInt(calcArray[2]);

    } else if (calcArray[1] === "*") {

        console.log("test *");

        result = parseInt(calcArray[0]) * parseInt(calcArray[2]);

    } else if (calcArray[1] === "/") {

        console.log("test /");

        result = parseInt(calcArray[0]) / parseInt(calcArray[2]);

    };

    console.log("result", result, typeof result);

    // Condition of error if /0

    if (result === Infinity) {

        displayElem.innerHTML = "Error";

    } else {

        displayElem.innerHTML = result;

        console.log("result", result, typeof result);
    };

    calcArray = [result];

    console.log("calcArray", calcArray, typeof calcArray);

});

// Add Event listener to Operators Buttons

cancButtonElem.addEventListener("click", function() {

    displayElem.textContent = "";

    calcArray = [];

    console.log("calcArray", calcArray, typeof calcArray);

});
