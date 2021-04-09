import { createLayout } from './layout.js';
import { hideModal, MODAL_RESTART_BUTTON } from './modal.js';
import { CELLS, CURRENT_MOVE, calculateWinner } from './winner.js';

const GAME_FIELD = document.querySelector('.game-field');
const SYMBOL = document.querySelector('.symbol');

let cells = Array(9).fill(null);
let isOddMove = true;

function restartGame() {
  cells.length = 0;
  cells = Array(9).fill(null);

  CELLS.forEach((cell) => {
    cell.textContent = '';
    cell.classList.remove('filled');
    cell.classList.remove('blocked');
    cell.classList.remove('highlighted');
  });

  SYMBOL.textContent = '✖';
  CURRENT_MOVE.classList.remove('hided');

  isOddMove = true;
}

GAME_FIELD.addEventListener('click', (event) => {
  const CLASS_NAME = event.target.className;
  const CELL = event.target;
  const ID = event.target.id;

  if (CLASS_NAME !== 'cell') {
    return null;
  }

  if (isOddMove) {
    cells[ID] = '✖';
    CELL.textContent = '✖';
    SYMBOL.textContent = 'O';
  } else {
    cells[ID] = 'O';
    CELL.textContent = 'O';
    SYMBOL.textContent = '✖';
  }

  isOddMove = !isOddMove;
  CELL.classList.add('filled');
  calculateWinner(cells);
});

MODAL_RESTART_BUTTON.addEventListener('click', () => {
  setTimeout(() => {
    hideModal();
    restartGame();
  }, 200);
});

createLayout();
