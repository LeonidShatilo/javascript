import { FIRST_NAME, LAST_NAME, LOGIN_BOX, LOGOUT_BUTTON } from './elements.js';
import { setUserName } from './storage.js';

export function submitForm(event) {
  event.preventDefault();

  const FORM = event.target;
  const USER_DATA = {
    firstName: FORM.firstName.value.trim(),
    lastName: FORM.lastName.value.trim(),
  };

  localStorage.setItem('user-data', JSON.stringify(USER_DATA));

  setTimeout(() => {
    setUserName(USER_DATA);

    LOGIN_BOX.classList.add('hidden');
    LOGOUT_BUTTON.classList.remove('hidden');

    FIRST_NAME.classList.remove('filled');
    LAST_NAME.classList.remove('filled');

    FORM.reset();
  }, 300);
}
