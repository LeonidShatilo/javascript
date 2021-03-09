const radio = document.getElementsByName('equality');

const number = 0;
const string = '0';
const object = new String('0');
const boolean = false;

const arrayOfOperands = [undefined, null, number, string, boolean, object];
const trueColor = '#bfe39f';
const falseColor = '#e39f9f';
const numberOfCells = 36;

let equality = 'loose';
let arrayOfElements = [];
let elementID = 1;

for (let index = 0; index < numberOfCells; index++) {
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
  let indexID = 0;

  for (let operandA = 0; operandA < arrayOfOperands.length; operandA++) {
    for (let operandB = 0; operandB < arrayOfOperands.length; operandB++) {
      compareOperands(
        arrayOfOperands[operandA],
        arrayOfOperands[operandB],
        arrayOfElements[indexID]
      );

      indexID++;
    }
  }

  indexID = 0;
}

radio.forEach((element) => {
  element.addEventListener('change', () => {
    equality = element.value;
    runCompare();
  });
});

runCompare();
