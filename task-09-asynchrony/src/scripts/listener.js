import {
  INPUT,
  CALCULATE_BUTTON,
  OUTPUT,
  stateSwitchingInputAndButton,
} from './utils.js';
import { calculate } from './calculation.js';

CALCULATE_BUTTON.addEventListener('click', () => {
  calculate(INPUT.value);
});

INPUT.addEventListener('input', () => {
  OUTPUT.innerHTML = '';
  stateSwitchingInputAndButton(false);
});

INPUT.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    calculate(INPUT.value);
  }
});
