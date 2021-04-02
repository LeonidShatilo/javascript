const TEXT_AREA = document.querySelector('.text-area');
const CALCULATE_BUTTON = document.querySelector('.calculate-button');
const ERROR = document.querySelector('.error');
const TABLE = document.querySelector('.table');

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

function calculateFrequencyOfLetters(arr) {
  return Array.from(
    arr
      .reduce(
        (map, value) => map.set(value, map.has(value) ? map.get(value) + 1 : 1),
        new Map()
      )
      .entries()
  );
}

function clearTable() {
  const ROW = document.querySelectorAll('.row');
  ROW.forEach((elem) => elem.remove());
}

function fillTable(array) {
  array.forEach((arr) => {
    const TR = document.createElement('tr');
    TR.className = 'row';

    arr.forEach((value) => {
      const TD = document.createElement('td');

      TD.innerHTML = value;
      TR.appendChild(TD);
    });

    TABLE.appendChild(TR);
  });
}

function errorHandling(arr) {
  if (arr.length === 0) {
    ERROR.innerHTML =
      'There must be at least one alphabetic character in the text area.';
    ERROR.classList.add('visible');
    TABLE.classList.remove('visible');
  } else {
    ERROR.innerHTML = '';
    ERROR.classList.remove('visible');
    TABLE.classList.add('visible');
  }
}

CALCULATE_BUTTON.addEventListener('click', () => {
  const ARRAY_OF_LETTERS = getArrayLetters();
  const ARRAY = calculateFrequencyOfLetters(ARRAY_OF_LETTERS);
  const SORTED_ARRAY = ARRAY.slice().sort((a, b) => b[1] - a[1]);

  errorHandling(ARRAY_OF_LETTERS);
  clearTable();
  fillTable(SORTED_ARRAY);
});
