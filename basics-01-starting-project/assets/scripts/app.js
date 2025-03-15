const defaultResult = 0; // value of const can't be re assigned
let currentResult = defaultResult; // global scope value

// currentResult = currentResult + 10;

// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

// This function takes the input from the user taken from the input field and adds the currentResult value to it

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult = currentResult + enteredNumber; // block scope value
  createAndWriteOutput('+', intialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', intialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', intialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', intialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
