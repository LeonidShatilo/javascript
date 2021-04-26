import {
  OUTPUT,
  LOADER,
  convertStringToArray,
  createStep,
  stateSwitchingInputAndButton,
  showError,
} from './utils.js';
import {
  isNumber,
  isOperator,
  isTwoNumbers,
  isWrongArrayData,
} from './check.js';
import { applyOperator } from './operators.js';

export async function calculate(inputValue) {
  const ARRAY_DATA = convertStringToArray(inputValue);
  let stack = [];

  OUTPUT.innerHTML = '';
  LOADER.classList.add('loader--visible');

  stateSwitchingInputAndButton(true);

  if (isWrongArrayData(ARRAY_DATA)) {
    showError('⮿ Error: Uncorrect data', 'error');

    return null;
  }

  if (!isTwoNumbers(ARRAY_DATA)) {
    showError('⮿ Error: The first two values must be a number', 'error');

    return null;
  }

  createStep(ARRAY_DATA);

  for (let index = 0; index < ARRAY_DATA.length; index++) {
    const VALUE = ARRAY_DATA[index];

    if (isNumber(VALUE)) {
      stack.push(Number(VALUE));
    }

    if (isOperator(VALUE)) {
      const PENULTIMATE = stack.length - 2;
      const LATEST = stack.length - 1;
      const A = stack[PENULTIMATE];
      const B = stack[LATEST];

      if (!isTwoNumbers([A, B])) {
        showError('⚠ Warning: Delete unnecessary operator', 'warning');

        return null;
      }

      stack.splice(PENULTIMATE, 2);

      const RESULT = await applyOperator(A, B, VALUE);
      const REMAINDER_OF_EXPRESSION = ARRAY_DATA.slice(
        index + 1,
        ARRAY_DATA.length
      );

      REMAINDER_OF_EXPRESSION.unshift(RESULT.toString());
      stack.length !== 0 && REMAINDER_OF_EXPRESSION.unshift(...stack);
      stack.push(RESULT);

      createStep(REMAINDER_OF_EXPRESSION);
    }
  }

  stateSwitchingInputAndButton(false);
  LOADER.classList.remove('loader--visible');

  stack.length === 1 && OUTPUT.lastChild.classList.add('bold');
  stack.length > 1 &&
    showError(
      `⚠ Warning: To complete the calculation, ${stack.length - 1} 
       more operator is needed`,
      'warning'
    );
}
