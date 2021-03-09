const mathRadio = document.getElementsByName('math');

const mathNumber = 10;
const mathString = '10';
const mathBoolean = true;
const mathObject = {};
const mathArray = [];

const mathArrayOfOperands = [
  undefined,
  null,
  mathNumber,
  mathString,
  mathBoolean,
  mathObject,
  mathArray,
];
const numberOfCellsMath = 49;

let operator = 'plus';
let mathArrayOfElements = [];
let mathElementID = 37;

for (let index = 0; index < numberOfCellsMath; index++) {
  mathArrayOfElements[index] = document.getElementById(`${mathElementID}`);
  mathElementID++;
}

function doMathCalculation(operandA, operator, operandB, element) {
  switch (operator) {
    case 'plus':
      element.innerHTML = `<code>${operandA + operandB}</code>`;
      break;
    case 'minus':
      element.innerHTML = `<code>${operandA - operandB}</code>`;
      break;
    case 'multiply':
      element.innerHTML = `<code>${operandA * operandB}</code>`;
      break;
    case 'divide':
      element.innerHTML = `<code>${operandA / operandB}</code>`;
      break;
  }
}

function runCalculation() {
  let indexID = 0;

  for (let operandA = 0; operandA < mathArrayOfOperands.length; operandA++) {
    for (let operandB = 0; operandB < mathArrayOfOperands.length; operandB++) {
      doMathCalculation(
        mathArrayOfOperands[operandA],
        operator,
        mathArrayOfOperands[operandB],
        mathArrayOfElements[indexID]
      );

      indexID++;
    }
  }

  indexID = 0;
}

mathRadio.forEach((element) => {
  element.addEventListener('change', () => {
    operator = element.value;
    runCalculation();
  });
});

runCalculation();
