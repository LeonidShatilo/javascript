import { range } from './main.js';
import { MIN, MAX, SUMMING_BUTTON } from './utils.js';
import { isMinError, isMaxError, handleErrors } from './errorHandling.js';
import { useDefaultColors, useFocusColors, useErrorColors } from './styles.js';

const INPUTS = document.querySelector('.inputs');
const RESULT = document.querySelector('.result-sum');

function summing() {
  let min = Number(MIN.value);
  let max = Number(MAX.value);
  let sum = range(min, max);

  if (typeof sum !== 'number') {
    RESULT.innerHTML = '&nbsp;';
    return;
  }

  RESULT.innerHTML = sum;
  RESULT.classList.add('result-sum--active');
  setTimeout(() => {
    RESULT.classList.remove('result-sum--active');
  }, 150);
}

INPUTS.addEventListener('keypress', (event) => {
  let isEnter = event.key === 'Enter';

  if (isEnter && !isMinError && !isMaxError) {
    summing();
  }
});

MIN.addEventListener('focus', () => {
  if (isMinError) {
    useErrorColors('min');
  } else {
    useFocusColors('min');
  }
});

MAX.addEventListener('focus', () => {
  if (isMaxError) {
    useErrorColors('max');
  } else {
    useFocusColors('max');
  }
});

MIN.addEventListener('blur', () => {
  useDefaultColors('min');
});

MAX.addEventListener('blur', () => {
  useDefaultColors('max');
});

MIN.oninput = () => {
  RESULT.innerHTML = '&nbsp;';
  handleErrors();
};

MAX.oninput = () => {
  RESULT.innerHTML = '&nbsp;';
  handleErrors();
};

SUMMING_BUTTON.addEventListener('click', summing);

summing();
