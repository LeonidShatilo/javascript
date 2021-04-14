const BODY = document.body;
const MODAL = document.createElement('div');
const MODAL_MESSAGE = document.createElement('p');
const MODAL_RESTART_BUTTON = document.createElement('button');
const WRAPPER_CONTENT = document.createElement('div');
const TITLE = document.createElement('h1');
const CURRENT_MOVE = document.createElement('h2');
const GAME_FIELD = document.createElement('div');

function addClass() {
  MODAL.classList.add('modal');
  MODAL_MESSAGE.classList.add('modal__message');
  MODAL_RESTART_BUTTON.classList.add('modal__restart-button');
  WRAPPER_CONTENT.classList.add('wrapper-content');
  TITLE.classList.add('title');
  CURRENT_MOVE.classList.add('current-move');
  GAME_FIELD.classList.add('game-field');
}

function addTextContent() {
  MODAL_RESTART_BUTTON.textContent = 'play again';
  TITLE.textContent = 'tic-tac-toe';
  CURRENT_MOVE.innerHTML = `Current move <span class="symbol">✖</span>`;
}

function appendElement() {
  BODY.append(MODAL);
  MODAL.append(MODAL_MESSAGE);
  MODAL.append(MODAL_RESTART_BUTTON);
  BODY.append(WRAPPER_CONTENT);
  WRAPPER_CONTENT.append(TITLE);
  WRAPPER_CONTENT.append(CURRENT_MOVE);
  WRAPPER_CONTENT.append(GAME_FIELD);
}

function createCells() {
  for (let index = 0; index < 9; index++) {
    const CELL = document.createElement('div');

    CELL.setAttribute('id', `${index}`);
    CELL.classList.add('cell');
    GAME_FIELD.append(CELL);
  }
}

export function createLayout() {
  addClass();
  addTextContent();
  appendElement();
  createCells();
}

createLayout();
