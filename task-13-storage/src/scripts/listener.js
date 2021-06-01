import {
  CHECKBOX,
  FORM_ELEM,
  FIRST_NAME,
  LAST_NAME,
  LOGIN_BOX,
  GREETING,
  LOGOUT_BUTTON,
} from './elements.js';
import { changeTheme } from './theme.js';
import { submitForm } from './form.js';

function setFilledInput(input) {
  if (input.value) {
    input.classList.add('filled');
  } else {
    input.classList.remove('filled');
  }
}

function logout() {
  setTimeout(() => {
    GREETING.innerHTML = '';

    LOGIN_BOX.classList.remove('hidden');
    LOGOUT_BUTTON.classList.add('hidden');
    GREETING.classList.remove('visible');

    localStorage.removeItem('user-data');
  }, 300);
}

CHECKBOX.addEventListener('change', changeTheme);

FIRST_NAME.addEventListener('input', () => setFilledInput(FIRST_NAME));
LAST_NAME.addEventListener('input', () => setFilledInput(LAST_NAME));

FORM_ELEM.addEventListener('submit', (event) => submitForm(event));

LOGOUT_BUTTON.addEventListener('click', logout);
