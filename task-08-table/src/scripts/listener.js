import { TABLE_BODY } from './buildTable.js';
import { addNewUser, getSort, deleteRow, deleteInput } from './main.js';

const TABLE_HEAD = document.querySelector('.table-head');
const BUTTON_PLUS = document.querySelector('.button-plus');
const BUTTON_MINUS = document.querySelector('.button-minus');

let isMinusButtonActive = false;

BUTTON_PLUS.addEventListener('click', addNewUser);

BUTTON_MINUS.addEventListener('click', () => {
  isMinusButtonActive = !isMinusButtonActive;
  BUTTON_MINUS.classList.toggle('button-minus--active');
});

TABLE_HEAD.addEventListener('click', (event) => getSort(event));

TABLE_BODY.addEventListener('click', (event) => {
  const EVENT = event;
  const TD = event.target;
  const INPUT = document.createElement('input');
  const NODE_NAME = event.target.nodeName;

  let isEnterPress = false;

  if (isMinusButtonActive && NODE_NAME === 'TD') {
    deleteRow(event);
    return null;
  }

  if (NODE_NAME !== 'TD') {
    return null;
  }

  INPUT.value = TD.innerHTML;
  TD.innerHTML = '';
  TD.appendChild(INPUT);
  INPUT.focus();
  TD.classList.add('table-data--focus');

  INPUT.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      isEnterPress = true;
      deleteInput(EVENT, INPUT, TD);
    }
  });

  INPUT.addEventListener('blur', () => {
    if (!isEnterPress) {
      deleteInput(event, INPUT, TD);
    }
  });
});

TABLE_BODY.addEventListener('mousemove', (event) => {
  const TR = event.target.parentNode;

  if (isMinusButtonActive) {
    TR.classList.add('highlight');
  }
});

TABLE_BODY.addEventListener('mouseout', (event) => {
  const TR = event.target.parentNode;

  if (isMinusButtonActive) {
    TR.classList.remove('highlight');
  }
});

window.addEventListener('keydown', (event) => {
  const TABLE_BODY_TRS = document.querySelectorAll('tbody > tr');

  if (isMinusButtonActive && event.key === 'Escape') {
    isMinusButtonActive = false;
    BUTTON_MINUS.classList.remove('button-minus--active');

    TABLE_BODY_TRS.forEach((tr) => {
      tr.classList.remove('highlight');
    });
  }
});
