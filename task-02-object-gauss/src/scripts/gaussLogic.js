import { gaussianChart, addDataChart } from './chart.js';
import {
  INPUT_NUMBER,
  getUniqueKeys,
  countOfNumbers,
  fillObject,
} from './utils.js';

let amountOfNumbers;
export let randomNumbersArray = [];
export let keysArray = [];

export function generateRandomNumberBoxMuller() {
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

export function runGenerate() {
  amountOfNumbers = +INPUT_NUMBER.value;

  for (let i = 0; i < amountOfNumbers; i++) {
    randomNumbersArray.push(generateRandomNumberBoxMuller());
  }

  getUniqueKeys(randomNumbersArray);
  let [keysCopy, countNumbersArray] = countOfNumbers(
    randomNumbersArray,
    keysArray
  );
  fillObject(keysCopy, countNumbersArray);
  addDataChart(gaussianChart, keysCopy, countNumbersArray);
}
