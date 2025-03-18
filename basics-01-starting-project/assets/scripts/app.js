const defaultResult = 0; // value of const can't be re assigned
let currentResult = defaultResult; // global scope value
let logEntries = [];

// currentResult = currentResult + 10;

// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

// This function takes the input from the user taken from the input field and adds the currentResult value to it

function getUserInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function add() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult += enteredNumber; // block scope value
  createAndWriteOutput('+', intialResult, enteredNumber);
  writeToLog('ADD', intialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', intialResult, enteredNumber);
  writeToLog('SUBTRACT', intialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', intialResult, enteredNumber);
  writeToLog('MULTIPLY', intialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', intialResult, enteredNumber);
  writeToLog('DIVIDE', intialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
