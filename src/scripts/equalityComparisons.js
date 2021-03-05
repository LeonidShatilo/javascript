const undefinedUndefined = document.getElementById('1');
const undefinedNull = document.getElementById('2');
const undefinedNumber = document.getElementById('3');
const undefinedString = document.getElementById('4');
const undefinedBoolean = document.getElementById('5');
const undefinedObject = document.getElementById('6');

const nullUndefined = document.getElementById('7');
const nullNull = document.getElementById('8');
const nullNumber = document.getElementById('9');
const nullString = document.getElementById('10');
const nullBoolean = document.getElementById('11');
const nullObject = document.getElementById('12');

const numberUndefined = document.getElementById('13');
const numberNull = document.getElementById('14');
const numberNumber = document.getElementById('15');
const numberString = document.getElementById('16');
const numberBoolean = document.getElementById('17');
const numberObject = document.getElementById('18');

const stringUndefined = document.getElementById('19');
const stringNull = document.getElementById('20');
const stringNumber = document.getElementById('21');
const stringString = document.getElementById('22');
const stringBoolean = document.getElementById('23');
const stringObject = document.getElementById('24');

const booleanUndefined = document.getElementById('25');
const booleanNull = document.getElementById('26');
const booleanNumber = document.getElementById('27');
const booleanString = document.getElementById('28');
const booleanBoolean = document.getElementById('29');
const booleanObject = document.getElementById('30');

const objectUndefined = document.getElementById('31');
const objectNull = document.getElementById('32');
const objectNumber = document.getElementById('33');
const objectString = document.getElementById('34');
const objectBoolean = document.getElementById('35');
const objectObject = document.getElementById('36');

const radio = document.getElementsByName('equality');

const number = 0;
const string = '0';
const object = new String('0');
const boolean = false;

const trueColor = '#bfe39f';
const falseColor = '#e39f9f';

let equality = 'loose';

function inputTrue(element) {
  element.innerHTML = `<code>true</code>`;
  element.style.backgroundColor = `${trueColor}`;
}

function inputFalse(element) {
  element.innerHTML = `<code>false</code>`;
  element.style.backgroundColor = `${falseColor}`;
}

function compareOperands(operandA, operandB, element) {
  switch (equality) {
    case 'loose':
      if (operandA == operandB) {
        inputTrue(element);
      } else {
        inputFalse(element);
      }
      break;
    case 'strict':
      if (operandA === operandB) {
        inputTrue(element);
      } else {
        inputFalse(element);
      }
      break;
  }
}

function runCompare() {
  compareOperands(undefined, undefined, undefinedUndefined);
  compareOperands(undefined, null, undefinedNull);
  compareOperands(undefined, number, undefinedNumber);
  compareOperands(undefined, string, undefinedString);
  compareOperands(undefined, boolean, undefinedBoolean);
  compareOperands(undefined, object, undefinedObject);

  compareOperands(null, undefined, nullUndefined);
  compareOperands(null, null, nullNull);
  compareOperands(null, number, nullNumber);
  compareOperands(null, string, nullString);
  compareOperands(null, boolean, nullBoolean);
  compareOperands(null, object, nullObject);

  compareOperands(number, undefined, numberUndefined);
  compareOperands(number, null, numberNull);
  compareOperands(number, number, numberNumber);
  compareOperands(number, string, numberString);
  compareOperands(number, boolean, numberBoolean);
  compareOperands(number, object, numberObject);

  compareOperands(string, undefined, stringUndefined);
  compareOperands(string, null, stringNull);
  compareOperands(string, number, stringNumber);
  compareOperands(string, string, stringString);
  compareOperands(string, boolean, stringBoolean);
  compareOperands(string, object, stringObject);

  compareOperands(boolean, undefined, booleanUndefined);
  compareOperands(boolean, null, booleanNull);
  compareOperands(boolean, number, booleanNumber);
  compareOperands(boolean, string, booleanString);
  compareOperands(boolean, boolean, booleanBoolean);
  compareOperands(boolean, object, booleanObject);

  compareOperands(object, undefined, objectUndefined);
  compareOperands(object, null, objectNull);
  compareOperands(object, number, objectNumber);
  compareOperands(object, string, objectString);
  compareOperands(object, boolean, objectBoolean);
  compareOperands(object, object, objectObject);
}

radio.forEach((element) => {
  element.addEventListener('change', () => {
    equality = element.value;
    runCompare();
  });
});

runCompare();
