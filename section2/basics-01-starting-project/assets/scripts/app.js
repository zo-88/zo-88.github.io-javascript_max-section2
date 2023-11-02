// alert('this is working');
const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

// gets input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(
  operationIdendtifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdendtifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  const initalResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = 'x';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  // these lines below are now fully reusable with no hard code values
  createAndWriteLog(mathOperator, initalResult, enteredNumber);
  writeToLog(calculationType, initalResult, enteredNumber, currentResult);
}

// all operation functions below
function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}
function multiply() {
  calculateResult('MULTIPLY');
}
function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
