export const INPUT = document.querySelector('.input');
export const CALCULATE_BUTTON = document.querySelector('.calculate-button');
export const OUTPUT = document.querySelector('.output');
export const LOADER = document.querySelector('.loader');

export function convertStringToArray(inputValue) {
  return inputValue
    .trim()
    .split(' ')
    .filter((value) => value !== '');
}

export function createStep(array) {
  const LI = document.createElement('li');

  LI.classList.add('step');
  LI.textContent = array.join(' ');
  OUTPUT.append(LI);
}

export function stateSwitchingInputAndButton(state) {
  INPUT.disabled = state;
  CALCULATE_BUTTON.disabled = state;
}

export function showError(message, className) {
  const LI = document.createElement('li');

  LI.classList.add(`${className}`);
  LI.textContent = `${message}`;
  OUTPUT.append(LI);

  stateSwitchingInputAndButton(false);
  LOADER.classList.remove('loader--visible');
}
