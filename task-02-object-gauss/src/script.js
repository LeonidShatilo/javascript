let randomNumbersArray = [];
let keysArray = [];
let gaussObject = {};

function generationRandomNumberBoxMuller() {
  let u = 0;
  let v = 0;

  while (u === 0) {
    u = Math.random();
  }

  while (v === 0) {
    v = Math.random();
  }

  return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}

function getUniqueKeys(array) {
  array.forEach((num) => {
    if (!keysArray.includes(num)) {
      keysArray.push(num);
    }
  });
}

function countNumber(array, keys) {
  let arrayCopy = array.slice(0);
  let keysCopy = keys.slice(0);
  let countNumbersArray = [];

  arrayCopy.sort((a, b) => a - b);
  keysCopy.sort((a, b) => a - b);

  keysCopy.forEach((key) => {
    let countNumber = 0;

    arrayCopy.forEach((num) => {
      if (num === key) {
        countNumber++;
      }
    });

    countNumbersArray.push(countNumber);
  });

  return [keysCopy, countNumbersArray];
}

function fillObject(keys, values) {
  for (let i = 0; i < keys.length; i++) {
    gaussObject[keys[i]] = values[i];
  }

  return gaussObject;
}

function runGeneration(numberOfIterations) {
  for (let i = 0; i < numberOfIterations; i++) {
    randomNumbersArray.push(generationRandomNumberBoxMuller());
  }

  getUniqueKeys(randomNumbersArray);
  let [keysCopy, countNumbersArray] = countNumber(
    randomNumbersArray,
    keysArray
  );

  return fillObject(keysCopy, countNumbersArray);
}

runGeneration(10);

console.log(gaussObject);
