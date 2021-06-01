import { HTML, CHECKBOX } from './elements.js';

export const LIGHT = 'light';
export const DARK = 'dark';

export function setTheme(value) {
  HTML.setAttribute('data-theme', value);
  localStorage.setItem('theme', value);
}

export function changeTheme() {
  if (CHECKBOX.checked) {
    setTheme(DARK);
  } else {
    setTheme(LIGHT);
  }
}
