const CHART = document.getElementById('myChart').getContext('2d');
const INPUT_NUMBER = document.querySelector('.input-number');
const GENERATE_BUTTON = document.querySelector('.generate-button');
const ERROR_TEXT = document.querySelector('.error');

let randomNumbersArray = [];
let keysArray = [];
let gaussObject = {};
let amountOfNumbers;
let value = 0;
let isError = false;

let gaussianChart = new Chart(CHART, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Quantity',
        backgroundColor: 'rgb(147, 217, 196)',
        borderColor: 'rgb(143, 204, 186)',
      },
    ],
  },
});

function generateRandomNumberBoxMuller() {
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

function clearArrays() {
  randomNumbersArray.length = 0;
  keysArray.length = 0;
}

function clearObject(obj) {
  for (let prop in obj) {
    delete obj[prop];
  }
}

function getUniqueKeys(array) {
  array.forEach((num) => {
    if (!keysArray.includes(num)) {
      keysArray.push(num);
    }
  });
}

function countOfNumbers(array, keys) {
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

  console.log(gaussObject);
}

function addDataChart(chart, label, data) {
  chart.data.labels = label;
  chart.data.datasets[0].data = data;
  chart.update();
}

function removeDataChart(chart) {
  chart.data.labels.length = 0;
  chart.data.datasets[0].data.length = 0;
  chart.update();
}

function removeAllData() {
  clearArrays();
  clearObject(gaussObject);
  removeDataChart(gaussianChart);
}

function runGenerate() {
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

function useErrorColors() {
  INPUT_NUMBER.style.borderColor = '#cd8383';
  INPUT_NUMBER.style.boxShadow = '0px 0px 0px 5px rgba(231, 143, 143, 0.25)';
}

function useFocusColors() {
  INPUT_NUMBER.style.borderColor = '#a4cc88';
  INPUT_NUMBER.style.boxShadow = '0px 0px 0px 5px rgba(143, 231, 164, 0.25)';
}

function useDefaultColors() {
  INPUT_NUMBER.style.borderColor = '#d7d7d7';
  INPUT_NUMBER.style.boxShadow = 'none';
}

function addErrorSettings() {
  isError = true;
  GENERATE_BUTTON.disabled = true;
}

function removeErrorSettings() {
  isError = false;
  GENERATE_BUTTON.disabled = false;
}

function addErrorText(text) {
  ERROR_TEXT.innerHTML = `<span>${text}</span>`;
}

INPUT_NUMBER.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (isError) {
      return;
    }
    removeAllData();
    runGenerate();
  }
});

INPUT_NUMBER.addEventListener('focus', () => {
  if (isError) {
    useErrorColors();
  } else {
    useFocusColors();
  }
});

INPUT_NUMBER.addEventListener('blur', () => {
  useDefaultColors();
});

INPUT_NUMBER.oninput = () => {
  if (+INPUT_NUMBER.value < 0) {
    addErrorSettings();
    useErrorColors();
    addErrorText('⚠ The number must be positive!');
  }
  if (+INPUT_NUMBER.value === 0) {
    addErrorSettings();
    useErrorColors();
    addErrorText('⚠ Enter a number greater than zero!');
  }
  if (+INPUT_NUMBER.value > 999999) {
    addErrorSettings();
    useErrorColors();
    addErrorText('⚠ Sorry, too big a number. Browser may freeze.');
  }
  if (+INPUT_NUMBER.value > 0 && +INPUT_NUMBER.value <= 999999) {
    removeErrorSettings();
    useFocusColors();
    addErrorText('&nbsp;');
  }
};

GENERATE_BUTTON.addEventListener('click', () => {
  if (isError) {
    return;
  }
  removeAllData();
  runGenerate();
});

runGenerate();
