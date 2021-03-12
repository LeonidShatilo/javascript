import { gaussianChart, removeDataChart } from './chart.js';
import { keysArray, gaussObject, randomNumbersArray } from './gaussLogic.js';

export const INPUT_NUMBER = document.querySelector('.input-number');
export const GENERATE_BUTTON = document.querySelector('.generate-button');

export function clearArrays() {
  randomNumbersArray.length = 0;
  keysArray.length = 0;
}

export function clearObject(obj) {
  for (let prop in obj) {
    delete obj[prop];
  }
}

export function removeAllData() {
  clearArrays();
  clearObject(gaussObject);
  removeDataChart(gaussianChart);
}

export function getUniqueKeys(array) {
  array.forEach((num) => {
    if (!keysArray.includes(num)) {
      keysArray.push(num);
    }
  });
}

export function countOfNumbers(array, keys) {
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

export function fillObject(keys, values) {
  for (let i = 0; i < keys.length; i++) {
    gaussObject[keys[i]] = values[i];
  }

  console.table(gaussObject);
}
