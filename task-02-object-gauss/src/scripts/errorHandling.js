import { INPUT_NUMBER, GENERATE_BUTTON } from './utils.js';
import { useFocusColors, useErrorColors } from './styles.js';

const ERROR_TEXT = document.querySelector('.error');

export let isError = false;

export function addErrorSettings() {
  isError = true;
  GENERATE_BUTTON.disabled = true;
}

export function removeErrorSettings() {
  isError = false;
  GENERATE_BUTTON.disabled = false;
}

export function addErrorText(text) {
  ERROR_TEXT.innerHTML = `<span>${text}</span>`;
}

export function handleErrors() {
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
  if (+INPUT_NUMBER.value > 0 && +INPUT_NUMBER.value <= 999999) {
    removeErrorSettings();
    useFocusColors();
    addErrorText('&nbsp;');
  }
}
