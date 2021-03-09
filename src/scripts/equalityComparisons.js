const radio = document.getElementsByName('equality');

const number = 0;
const string = '0';
const object = new String('0');
const boolean = false;

const trueColor = '#bfe39f';
const falseColor = '#e39f9f';

let equality = 'loose';
let arrayOfElements = [];
let elementID = 1;

for (let index = 0; index < 36; index++) {
  arrayOfElements[index] = document.getElementById(`${elementID}`);
  elementID++;
}

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
  compareOperands(undefined, undefined, arrayOfElements[0]);
  compareOperands(undefined, null, arrayOfElements[1]);
  compareOperands(undefined, number, arrayOfElements[2]);
  compareOperands(undefined, string, arrayOfElements[3]);
  compareOperands(undefined, boolean, arrayOfElements[4]);
  compareOperands(undefined, object, arrayOfElements[5]);

  compareOperands(null, undefined, arrayOfElements[6]);
  compareOperands(null, null, arrayOfElements[7]);
  compareOperands(null, number, arrayOfElements[8]);
  compareOperands(null, string, arrayOfElements[9]);
  compareOperands(null, boolean, arrayOfElements[10]);
  compareOperands(null, object, arrayOfElements[11]);

  compareOperands(number, undefined, arrayOfElements[12]);
  compareOperands(number, null, arrayOfElements[13]);
  compareOperands(number, number, arrayOfElements[14]);
  compareOperands(number, string, arrayOfElements[15]);
  compareOperands(number, boolean, arrayOfElements[16]);
  compareOperands(number, object, arrayOfElements[17]);

  compareOperands(string, undefined, arrayOfElements[18]);
  compareOperands(string, null, arrayOfElements[19]);
  compareOperands(string, number, arrayOfElements[20]);
  compareOperands(string, string, arrayOfElements[21]);
  compareOperands(string, boolean, arrayOfElements[22]);
  compareOperands(string, object, arrayOfElements[23]);

  compareOperands(boolean, undefined, arrayOfElements[24]);
  compareOperands(boolean, null, arrayOfElements[25]);
  compareOperands(boolean, number, arrayOfElements[26]);
  compareOperands(boolean, string, arrayOfElements[27]);
  compareOperands(boolean, boolean, arrayOfElements[28]);
  compareOperands(boolean, object, arrayOfElements[29]);

  compareOperands(object, undefined, arrayOfElements[30]);
  compareOperands(object, null, arrayOfElements[31]);
  compareOperands(object, number, arrayOfElements[32]);
  compareOperands(object, string, arrayOfElements[33]);
  compareOperands(object, boolean, arrayOfElements[34]);
  compareOperands(object, object, arrayOfElements[35]);
}

radio.forEach((element) => {
  element.addEventListener('change', () => {
    equality = element.value;
    runCompare();
  });
});

runCompare();
