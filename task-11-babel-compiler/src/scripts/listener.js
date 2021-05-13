import {
  SELECT_BASE,
  SELECT_SYMBOL,
  INPUT_BASE,
  INPUT_SYMBOL,
  ARROW_BASE,
  ARROW_SYMBOL,
  rotateArrow,
} from './utils.js';
import { getRateData } from './api.js';
import { convert } from './convert.js';

let isOpenList = false;

function clickSelect(nameSelect) {
  isOpenList = !isOpenList;

  if (isOpenList) {
    rotateArrow(nameSelect);
  } else {
    nameSelect === 'base'
      ? ARROW_BASE.classList.remove('arrow--rotate')
      : ARROW_SYMBOL.classList.remove('arrow--rotate');
  }
}

function changeSelect() {
  getRateData(SELECT_BASE.value, SELECT_SYMBOL.value);
}

function changeInput(nameInput) {
  while (INPUT_BASE.value.charAt(0) === '0') {
    if (INPUT_BASE.value.length === 1 || INPUT_BASE.value.charAt(1) == '.') {
      break;
    }

    INPUT_BASE.value = INPUT_BASE.value.substr(1, INPUT_BASE.value.length - 1);
  }

  switch (nameInput) {
    case 'base':
      if (INPUT_BASE.value === '') {
        INPUT_SYMBOL.value = '';

        return null;
      }

      convert(nameInput);
      break;

    case 'symbol':
      if (INPUT_SYMBOL.value === '') {
        INPUT_BASE.value = '';

        return null;
      }

      convert(nameInput);
      break;
  }
}

SELECT_BASE.addEventListener('click', () => clickSelect('base'));
SELECT_SYMBOL.addEventListener('click', () => clickSelect('symbol'));

SELECT_BASE.addEventListener('change', () => changeSelect());
SELECT_SYMBOL.addEventListener('change', () => changeSelect());

INPUT_BASE.addEventListener('input', () => changeInput('base'));
INPUT_SYMBOL.addEventListener('input', () => changeInput('symbol'));

window.addEventListener('click', (event) => {
  if (
    !event.target.className.includes('arrow') &&
    !event.target.className.includes('select')
  ) {
    isOpenList = false;
    ARROW_BASE.classList.remove('arrow--rotate');
    ARROW_SYMBOL.classList.remove('arrow--rotate');
  }
});
