import {
  SELECT_BASE,
  SELECT_SYMBOL,
  INPUT_BASE,
  INPUT_SYMBOL,
} from './utils.js';

const ERROR = document.querySelector('.error');

const ARRAY_OF_ELEMENTS = [
  ERROR,
  INPUT_BASE,
  INPUT_SYMBOL,
  SELECT_BASE,
  SELECT_SYMBOL,
];
const ARRAY_OF_CLASSES = [
  'error--visible',
  'base__input-error',
  'symbol__input-error',
  'base__select-error',
  'symbol__select-error',
];

export function showError(error) {
  ERROR.innerHTML = error;

  for (let i = 0; i < ARRAY_OF_ELEMENTS.length; i++) {
    ARRAY_OF_ELEMENTS[i].classList.add(ARRAY_OF_CLASSES[i]);
  }

  INPUT_BASE.disabled = true;
  INPUT_SYMBOL.disabled = true;

  INPUT_BASE.value = '';
  INPUT_SYMBOL.value = '';
}

export function hideError() {
  for (let i = 0; i < ARRAY_OF_ELEMENTS.length; i++) {
    ARRAY_OF_ELEMENTS[i].classList.remove(ARRAY_OF_CLASSES[i]);
  }

  INPUT_BASE.disabled = false;
  INPUT_SYMBOL.disabled = false;

  setTimeout(() => (ERROR.innerHTML = '&nbsp;'), 600);
}
