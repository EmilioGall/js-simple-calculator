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

    displayElem.textContent = "";

    let result = "";

    console.log("result", result, typeof result);

    for (let i=0; i<calcArray.length; i++) {

        result += calcArray[i];
    };

    console.log("result", result, typeof result);

    let finalResult = eval(result)

    console.log("finalResult", finalResult, typeof finalResult);

    // Condition of error if /0

    if (finalResult === Infinity) {

        displayElem.innerHTML = "Error";

    } else {

        displayElem.innerHTML = finalResult;

        console.log("finalResult", finalResult, typeof finalResult);
    };

    calcArray = [finalResult];

    console.log("calcArray", calcArray, typeof calcArray);

});

// Add Event listener to Operators Buttons

cancButtonElem.addEventListener("click", function() {

    displayElem.textContent = "";

    calcArray = [];

    console.log("calcArray", calcArray, typeof calcArray);

});
