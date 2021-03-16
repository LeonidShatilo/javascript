import { useFocusColors, useErrorColors } from './styles.js';
import { MIN, MAX, SUMMING_BUTTON, ERROR_TEXT } from './utils.js';

export let isMinError = false;
export let isMaxError = false;

export function addErrorSettings(input) {
  if (input === 'min') {
    isMinError = true;
  }
  if (input === 'max') {
    isMaxError = true;
  }
  if (isMinError || isMinError) {
    SUMMING_BUTTON.disabled = true;
  }
}

export function removeErrorSettings(input) {
  if (input === 'min') {
    isMinError = false;
  }
  if (input === 'max') {
    isMaxError = false;
  }
  if (!isMinError && !isMinError) {
    SUMMING_BUTTON.disabled = false;
  }
}

export function addErrorText(text) {
  if (text === '&nbsp;') {
    ERROR_TEXT.classList.remove('error--active');
    setTimeout(() => {
      ERROR_TEXT.innerHTML = '&nbsp;';
    }, 200);
  } else {
    ERROR_TEXT.classList.add('error--active');
    ERROR_TEXT.innerHTML = `${text}`;
  }
}

export function handleErrors() {
  if (+MIN.value === 0 || +MAX.value === 0) {
    if (+MIN.value === 0) {
      addErrorSettings('min');
      addErrorText('⚠ Enter a number other than zero.');
      if (MIN.classList.contains('input-focus-colors')) {
        useErrorColors('min');
      }
    }

    if (+MAX.value === 0) {
      addErrorSettings('max');
      addErrorText('⚠ Enter a number other than zero.');
      if (MAX.classList.contains('input-focus-colors')) {
        useErrorColors('max');
      }
    }
  } else if (+MIN.value > +MAX.value) {
    addErrorSettings('min');
    addErrorText('⚠ The minimum value is greater than the maximum value.');

    if (MIN.classList.contains('input-focus-colors')) {
      useErrorColors('min');
    }

    if (+MAX.value > 0) {
      if (MAX.classList.contains('input-error-colors')) {
        useFocusColors('max');
      }
      removeErrorSettings('max');
    }
  } else {
    removeErrorSettings('min');
    removeErrorSettings('max');
    addErrorText('&nbsp;');

    if (MIN.classList.contains('input-error-colors')) {
      useFocusColors('min');
    }

    if (MAX.classList.contains('input-error-colors')) {
      useFocusColors('max');
    }
  }
}
