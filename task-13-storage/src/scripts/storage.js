import { CHECKBOX, LOGIN_BOX, GREETING, LOGOUT_BUTTON } from './elements.js';
import { setTheme, LIGHT, DARK } from './theme.js';

export function getThemeFromLocalStorage() {
  const THEME = localStorage.getItem('theme');

  switch (THEME) {
    default:
    case LIGHT:
      setTheme(LIGHT);
      break;

    case DARK:
      setTheme(DARK);
      CHECKBOX.checked = true;
      break;
  }
}

export function setUserName(data) {
  GREETING.innerHTML = `Hello, ${data.firstName} ${data.lastName}!`;

  setTimeout(() => GREETING.classList.add('visible'), 250);
}

export function getUserDataFromLocalStorage() {
  const USER_DATA = JSON.parse(localStorage.getItem('user-data'));

  if (USER_DATA) {
    setUserName(USER_DATA);

    LOGIN_BOX.classList.add('hidden');
    LOGOUT_BUTTON.classList.remove('hidden');
  } else {
    LOGIN_BOX.classList.remove('hidden');
  }
}
