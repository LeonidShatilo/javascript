const TEXT_AREA = document.querySelector('.text-area');
const CALCULATE_BUTTON = document.querySelector('.calculate-button');
const ERROR = document.querySelector('.error');
const TABLE = document.querySelector('.table');
const TABLE_BODY = document.querySelector('.table-body');

function getTextAreaValue() {
  TEXT_AREA.innerHTML = TEXT_AREA.value;

  return TEXT_AREA.value;
}

function getArrayLetters() {
  let text = getTextAreaValue();

  return text
    .toLowerCase()
    .replace(/[^A-Za-zА-Яа-яЁё]/g, '')
    .split('');
}

function calculateQuantityOfLetters(arrayOfLetters) {
  return Array.from(
    arrayOfLetters
      .reduce(
        (map, value) => map.set(value, map.has(value) ? map.get(value) + 1 : 1),
        new Map()
      )
      .entries()
  );
}

function clearTable() {
  while (TABLE_BODY.firstChild) {
    TABLE_BODY.firstChild.remove();
  }
}

function fillTable(sortedArray) {
  sortedArray.forEach((arr) => {
    const TR = document.createElement('tr');

    arr.forEach((value) => {
      const TD = document.createElement('td');

      TD.innerHTML = value;
      TR.appendChild(TD);
    });

    TABLE_BODY.appendChild(TR);
  });
}

function errorHandling(arrayOfLetters) {
  if (arrayOfLetters.length === 0) {
    ERROR.classList.add('visible');
    TABLE.classList.remove('visible');
  } else {
    ERROR.classList.remove('visible');
    TABLE.classList.add('visible');
  }
}

function calculateFrequencyOfLetters(sortedArray, arrayOfLetters) {
  sortedArray.forEach((arr) => {
    const QUANTITY = arr[1];
    const TOTAL_QUANTITY = arrayOfLetters.length;
    const FREQUENCY = ((QUANTITY / TOTAL_QUANTITY) * 100).toFixed(2);

    arr.push(FREQUENCY);
  });
}

CALCULATE_BUTTON.addEventListener('click', () => {
  const ARRAY_OF_LETTERS = getArrayLetters();
  const ARRAY = calculateQuantityOfLetters(ARRAY_OF_LETTERS);
  const SORTED_ARRAY = ARRAY.slice().sort((a, b) => b[1] - a[1]);

  errorHandling(ARRAY_OF_LETTERS);
  calculateFrequencyOfLetters(SORTED_ARRAY, ARRAY_OF_LETTERS);
  clearTable();
  fillTable(SORTED_ARRAY);
});
