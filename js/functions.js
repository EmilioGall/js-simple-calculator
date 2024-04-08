/**
 * Description: function print value of clicked number button element on display.
 */
function numToDisplayOnClick() {

    console.log(this);

    const buttonNum = parseInt(this.value);

    console.log("buttonNum", buttonNum, typeof buttonNum);

    displayElem.innerHTML += buttonNum;

    calcArray.push(buttonNum);

    console.log("calcArray", calcArray, typeof calcArray);

};


/**
 * Description: function print value of clicked operator button element on display.
 */
function opToDisplayOnClick() {

    console.log(this);

    const buttonOp = this.value;

    const buttonOpText = this.textContent;

    console.log("buttonOp", buttonOp, typeof buttonOp);

    displayElem.innerHTML += buttonOpText;

    calcArray.push(buttonOp);

    console.log("calcArray", calcArray, typeof calcArray);

    displayElem.textContent = "";

};


/**
 * Description: function push content of (displayElem) in (calcArray).
 */
function fromElemToArray() {

    calcArray.push(displayElem.textContent);

    console.log("calcArray", calcArray, typeof calcArray);

    displayElem.textContent = "";

};