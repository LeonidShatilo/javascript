import { runGenerate } from './gaussLogic.js';
import { INPUT_NUMBER, GENERATE_BUTTON, removeAllData } from './utils.js';
import { useDefaultColors, useFocusColors, useErrorColors } from './styles.js';
import { handleErrors, isError } from './errorHandling.js';

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
  INPUT_NUMBER.value = INPUT_NUMBER.value.slice(0, 6);
  handleErrors();
};

GENERATE_BUTTON.addEventListener('click', () => {
  if (isError) {
    return;
  }
  removeAllData();
  runGenerate();
});
