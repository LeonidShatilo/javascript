const utils = await import('./utils.js');

const ERROR = document.querySelector('.error');

const ARRAY_OF_ELEMENTS = [
  ERROR,
  utils.INPUT_BASE,
  utils.INPUT_SYMBOL,
  utils.SELECT_BASE,
  utils.SELECT_SYMBOL,
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

  utils.INPUT_BASE.disabled = true;
  utils.INPUT_SYMBOL.disabled = true;

  utils.INPUT_BASE.value = '';
  utils.INPUT_SYMBOL.value = '';
}

export function hideError() {
  for (let i = 0; i < ARRAY_OF_ELEMENTS.length; i++) {
    ARRAY_OF_ELEMENTS[i].classList.remove(ARRAY_OF_CLASSES[i]);
  }

  utils.INPUT_BASE.disabled = false;
  utils.INPUT_SYMBOL.disabled = false;

  setTimeout(() => (ERROR.innerHTML = '&nbsp;'), 600);
}
