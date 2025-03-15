const defaultResult = 0; // value of const can't be re assigned
let currentResult = defaultResult; // global scope value

// currentResult = currentResult + 10;

// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

// This function takes the input from the user taken from the input field and adds the currentResult value to it
function add() {
  currentResult = parseInt(userInput.value) + currentResult; // block scope value
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
