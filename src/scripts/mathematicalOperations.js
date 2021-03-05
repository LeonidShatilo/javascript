const mathUndefinedUndefined = document.getElementById('37');
const mathUndefinedNull = document.getElementById('38');
const mathUndefinedNumber = document.getElementById('39');
const mathUndefinedString = document.getElementById('40');
const mathUndefinedBoolean = document.getElementById('41');
const mathUndefinedObject = document.getElementById('42');
const mathUndefinedArray = document.getElementById('43');

const mathNullUndefined = document.getElementById('44');
const mathNullNull = document.getElementById('45');
const mathNullNumber = document.getElementById('46');
const mathNullString = document.getElementById('47');
const mathNullBoolean = document.getElementById('48');
const mathNullObject = document.getElementById('49');
const mathNullArray = document.getElementById('50');

const mathNumberUndefined = document.getElementById('51');
const mathNumberNull = document.getElementById('52');
const mathNumberNumber = document.getElementById('53');
const mathNumberString = document.getElementById('54');
const mathNumberBoolean = document.getElementById('55');
const mathNumberObject = document.getElementById('56');
const mathNumberArray = document.getElementById('57');

const mathStringUndefined = document.getElementById('58');
const mathStringNull = document.getElementById('59');
const mathStringNumber = document.getElementById('60');
const mathStringString = document.getElementById('61');
const mathStringBoolean = document.getElementById('62');
const mathStringObject = document.getElementById('63');
const mathStringArray = document.getElementById('64');

const mathBooleanUndefined = document.getElementById('65');
const mathBooleanNull = document.getElementById('66');
const mathBooleanNumber = document.getElementById('67');
const mathBooleanString = document.getElementById('68');
const mathBooleanBoolean = document.getElementById('69');
const mathBooleanObject = document.getElementById('70');
const mathBooleanArray = document.getElementById('71');

const mathObjectUndefined = document.getElementById('72');
const mathObjectNull = document.getElementById('73');
const mathObjectNumber = document.getElementById('74');
const mathObjectString = document.getElementById('75');
const mathObjectBoolean = document.getElementById('76');
const mathObjectObject = document.getElementById('77');
const mathObjectArray = document.getElementById('78');

const mathArrayUndefined = document.getElementById('79');
const mathArrayNull = document.getElementById('80');
const mathArrayNumber = document.getElementById('81');
const mathArrayString = document.getElementById('82');
const mathArrayBoolean = document.getElementById('83');
const mathArrayObject = document.getElementById('84');
const mathArrayArray = document.getElementById('85');

const mathRadio = document.getElementsByName('math');

const mathNumber = 10;
const mathString = '10';
const mathBoolean = true;
const mathObject = {};
const mathArray = [];

let operator = 'plus';

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
  doMathCalculation(undefined, operator, undefined, mathUndefinedUndefined);
  doMathCalculation(undefined, operator, null, mathUndefinedNull);
  doMathCalculation(undefined, operator, mathNumber, mathUndefinedNumber);
  doMathCalculation(undefined, operator, mathString, mathUndefinedString);
  doMathCalculation(undefined, operator, mathBoolean, mathUndefinedBoolean);
  doMathCalculation(undefined, operator, mathObject, mathUndefinedObject);
  doMathCalculation(undefined, operator, mathArray, mathUndefinedArray);

  doMathCalculation(null, operator, undefined, mathNullUndefined);
  doMathCalculation(null, operator, null, mathNullNull);
  doMathCalculation(null, operator, mathNumber, mathNullNumber);
  doMathCalculation(null, operator, mathString, mathNullString);
  doMathCalculation(null, operator, mathBoolean, mathNullBoolean);
  doMathCalculation(null, operator, mathObject, mathNullObject);
  doMathCalculation(null, operator, mathArray, mathNullArray);

  doMathCalculation(mathNumber, operator, undefined, mathNumberUndefined);
  doMathCalculation(mathNumber, operator, null, mathNumberNull);
  doMathCalculation(mathNumber, operator, mathNumber, mathNumberNumber);
  doMathCalculation(mathNumber, operator, mathString, mathNumberString);
  doMathCalculation(mathNumber, operator, mathBoolean, mathNumberBoolean);
  doMathCalculation(mathNumber, operator, mathObject, mathNumberObject);
  doMathCalculation(mathNumber, operator, mathArray, mathNumberArray);

  doMathCalculation(mathString, operator, undefined, mathStringUndefined);
  doMathCalculation(mathString, operator, null, mathStringNull);
  doMathCalculation(mathString, operator, mathNumber, mathStringNumber);
  doMathCalculation(mathString, operator, mathString, mathStringString);
  doMathCalculation(mathString, operator, mathBoolean, mathStringBoolean);
  doMathCalculation(mathString, operator, mathObject, mathStringObject);
  doMathCalculation(mathString, operator, mathArray, mathStringArray);

  doMathCalculation(mathBoolean, operator, undefined, mathBooleanUndefined);
  doMathCalculation(mathBoolean, operator, null, mathBooleanNull);
  doMathCalculation(mathBoolean, operator, mathNumber, mathBooleanNumber);
  doMathCalculation(mathBoolean, operator, mathString, mathBooleanString);
  doMathCalculation(mathBoolean, operator, mathBoolean, mathBooleanBoolean);
  doMathCalculation(mathBoolean, operator, mathObject, mathBooleanObject);
  doMathCalculation(mathBoolean, operator, mathArray, mathBooleanArray);

  doMathCalculation(mathObject, operator, undefined, mathObjectUndefined);
  doMathCalculation(mathObject, operator, null, mathObjectNull);
  doMathCalculation(mathObject, operator, mathNumber, mathObjectNumber);
  doMathCalculation(mathObject, operator, mathString, mathObjectString);
  doMathCalculation(mathObject, operator, mathBoolean, mathObjectBoolean);
  doMathCalculation(mathObject, operator, mathObject, mathObjectObject);
  doMathCalculation(mathObject, operator, mathArray, mathObjectArray);

  doMathCalculation(mathArray, operator, undefined, mathArrayUndefined);
  doMathCalculation(mathArray, operator, null, mathArrayNull);
  doMathCalculation(mathArray, operator, mathNumber, mathArrayNumber);
  doMathCalculation(mathArray, operator, mathString, mathArrayString);
  doMathCalculation(mathArray, operator, mathBoolean, mathArrayBoolean);
  doMathCalculation(mathArray, operator, mathObject, mathArrayObject);
  doMathCalculation(mathArray, operator, mathArray, mathArrayArray);
}

mathRadio.forEach((element) => {
  element.addEventListener('change', () => {
    operator = element.value;
    runCalculation();
  });
});

runCalculation();
