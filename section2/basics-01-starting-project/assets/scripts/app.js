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

// all operation functions below
function add() {
  const enteredNumber = getUserInput();
  const initalResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog('+', initalResult, enteredNumber);
  writeToLog('ADD', initalResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initalResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog('-', initalResult, enteredNumber);
  writeToLog('SUBTRACT', initalResult, enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserInput();
  const initalResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('x', initalResult, enteredNumber);
  writeToLog('MULTIPLY', initalResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserInput();
  const initalResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', initalResult, enteredNumber);
  writeToLog('DIVIDE', initalResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
