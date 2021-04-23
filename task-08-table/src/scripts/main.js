import { USER_DATA } from './data.js';
import { buildTable } from './buildTable.js';
import { storageData, setDataInLocalStorage } from './localStorage.js';

let userData = storageData ? storageData.slice() : USER_DATA.slice();

export function addNewUser() {
  const NEW_USER = {
    number: '',
    firstName: '',
    lastName: '',
    city: '',
    phone: '',
    email: '',
  };
  const NEXT_NUMBER = userData.length + 1;

  NEW_USER.number = NEXT_NUMBER;
  userData.push(NEW_USER);
  buildTable(userData);
  setDataInLocalStorage(userData);
}

function compare(a, b, column, order) {
  switch (order) {
    case 'asc':
      if (typeof a[column] === 'string') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] - b[column];
      }

    case 'desc':
      if (typeof a[column] === 'string') {
        return a[column] < b[column] ? 1 : -1;
      } else {
        return b[column] - a[column];
      }
  }
}

export function getSort({ target }) {
  const COLUMN = target.dataset.column;
  let order = target.dataset.order;

  order = target.dataset.order =
    order === 'unset' || order === 'desc' ? 'asc' : 'desc';

  userData = userData.sort((a, b) => compare(a, b, COLUMN, order));

  for (const cell of target.parentNode.cells) {
    cell.classList.toggle('sorted', cell === target);
  }

  buildTable(userData);
}

export function deleteRow(event) {
  const TABLE_BODY_TRS = document.querySelectorAll('tbody > tr');
  const TR = event.target.parentNode;
  const INDEX = [...TABLE_BODY_TRS].indexOf(TR);
  const NUMBER = Number(event.target.parentNode.children[0].innerText);

  userData.splice(INDEX, 1);

  userData.forEach((user) => {
    if (user.number > NUMBER) {
      user.number -= 1;
    }
  });

  buildTable(userData);
  setDataInLocalStorage(userData);
}

export function deleteInput(event, input, td) {
  const COLUMN = event.target.dataset.column;
  const TABLE_BODY_TRS = document.querySelectorAll('tbody > tr');
  const TR = event.target.parentNode;
  const INDEX = [...TABLE_BODY_TRS].indexOf(TR);

  if (input.value === '') {
    userData[INDEX][COLUMN] = '';
  } else {
    userData[INDEX][COLUMN] = isNaN(+input.value) ? input.value : +input.value;
  }

  td.innerHTML = input.value;
  td.classList.remove('table-data--focus');

  setDataInLocalStorage(userData);
}

buildTable(userData);
