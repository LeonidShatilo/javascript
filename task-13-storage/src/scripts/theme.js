import { HTML, CHECKBOX } from './elements.js';

export function setTheme(value) {
  HTML.setAttribute('data-theme', value);
  localStorage.setItem('theme', value);
}

export function changeTheme() {
  if (CHECKBOX.checked) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}
