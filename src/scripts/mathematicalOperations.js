const mathRadio = document.getElementsByName('math');

const mathNumber = 10;
const mathString = '10';
const mathBoolean = true;
const mathObject = {};
const mathArray = [];

let operator = 'plus';
let mathArrayOfElements = [];
let mathElementID = 37;

for (let index = 0; index < 49; index++) {
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
  doMathCalculation(undefined, operator, undefined, mathArrayOfElements[0]);
  doMathCalculation(undefined, operator, null, mathArrayOfElements[1]);
  doMathCalculation(undefined, operator, mathNumber, mathArrayOfElements[2]);
  doMathCalculation(undefined, operator, mathString, mathArrayOfElements[3]);
  doMathCalculation(undefined, operator, mathBoolean, mathArrayOfElements[4]);
  doMathCalculation(undefined, operator, mathObject, mathArrayOfElements[5]);
  doMathCalculation(undefined, operator, mathArray, mathArrayOfElements[6]);

  doMathCalculation(null, operator, undefined, mathArrayOfElements[7]);
  doMathCalculation(null, operator, null, mathArrayOfElements[8]);
  doMathCalculation(null, operator, mathNumber, mathArrayOfElements[9]);
  doMathCalculation(null, operator, mathString, mathArrayOfElements[10]);
  doMathCalculation(null, operator, mathBoolean, mathArrayOfElements[11]);
  doMathCalculation(null, operator, mathObject, mathArrayOfElements[12]);
  doMathCalculation(null, operator, mathArray, mathArrayOfElements[13]);

  doMathCalculation(mathNumber, operator, undefined, mathArrayOfElements[14]);
  doMathCalculation(mathNumber, operator, null, mathArrayOfElements[15]);
  doMathCalculation(mathNumber, operator, mathNumber, mathArrayOfElements[16]);
  doMathCalculation(mathNumber, operator, mathString, mathArrayOfElements[17]);
  doMathCalculation(mathNumber, operator, mathBoolean, mathArrayOfElements[18]);
  doMathCalculation(mathNumber, operator, mathObject, mathArrayOfElements[19]);
  doMathCalculation(mathNumber, operator, mathArray, mathArrayOfElements[20]);

  doMathCalculation(mathString, operator, undefined, mathArrayOfElements[21]);
  doMathCalculation(mathString, operator, null, mathArrayOfElements[22]);
  doMathCalculation(mathString, operator, mathNumber, mathArrayOfElements[23]);
  doMathCalculation(mathString, operator, mathString, mathArrayOfElements[24]);
  doMathCalculation(mathString, operator, mathBoolean, mathArrayOfElements[25]);
  doMathCalculation(mathString, operator, mathObject, mathArrayOfElements[26]);
  doMathCalculation(mathString, operator, mathArray, mathArrayOfElements[27]);

  doMathCalculation(mathBoolean, operator, undefined, mathArrayOfElements[28]);
  doMathCalculation(mathBoolean, operator, null, mathArrayOfElements[29]);
  doMathCalculation(mathBoolean, operator, mathNumber, mathArrayOfElements[30]);
  doMathCalculation(mathBoolean, operator, mathString, mathArrayOfElements[31]);
  doMathCalculation(mathBoolean, operator, mathBoolean, mathArrayOfElements[32]);
  doMathCalculation(mathBoolean, operator, mathObject, mathArrayOfElements[33]);
  doMathCalculation(mathBoolean, operator, mathArray, mathArrayOfElements[34]);

  doMathCalculation(mathObject, operator, undefined, mathArrayOfElements[35]);
  doMathCalculation(mathObject, operator, null, mathArrayOfElements[36]);
  doMathCalculation(mathObject, operator, mathNumber, mathArrayOfElements[37]);
  doMathCalculation(mathObject, operator, mathString, mathArrayOfElements[38]);
  doMathCalculation(mathObject, operator, mathBoolean, mathArrayOfElements[39]);
  doMathCalculation(mathObject, operator, mathObject, mathArrayOfElements[40]);
  doMathCalculation(mathObject, operator, mathArray, mathArrayOfElements[41]);

  doMathCalculation(mathArray, operator, undefined, mathArrayOfElements[42]);
  doMathCalculation(mathArray, operator, null, mathArrayOfElements[43]);
  doMathCalculation(mathArray, operator, mathNumber, mathArrayOfElements[44]);
  doMathCalculation(mathArray, operator, mathString, mathArrayOfElements[45]);
  doMathCalculation(mathArray, operator, mathBoolean, mathArrayOfElements[46]);
  doMathCalculation(mathArray, operator, mathObject, mathArrayOfElements[47]);
  doMathCalculation(mathArray, operator, mathArray, mathArrayOfElements[48]);
}

mathRadio.forEach((element) => {
  element.addEventListener('change', () => {
    operator = element.value;
    runCalculation();
  });
});

runCalculation();
