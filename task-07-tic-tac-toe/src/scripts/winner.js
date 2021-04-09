import { showModal } from './modal.js';

export const CELLS = document.querySelectorAll('.cell');
export const CURRENT_MOVE = document.querySelector('.current-move');

export function calculateWinner(cells) {
  const WINNING_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner;

  WINNING_LINES.forEach((line) => {
    const [A, B, C] = line;

    if (cells[A] && cells[A] === cells[B] && cells[A] === cells[C]) {
      winner = cells[A];

      CELLS[A].classList.add('highlighted');
      CELLS[B].classList.add('highlighted');
      CELLS[C].classList.add('highlighted');
    }
  });

  if (cells.indexOf(null) === -1) {
    showModal('No winner');
    CURRENT_MOVE.classList.add('hided');
  }

  if (winner) {
    showModal(`${winner} is a winner!`);
    CURRENT_MOVE.classList.add('hided');

    CELLS.forEach((element) => {
      if (element.className === 'cell') {
        element.classList.add('blocked');
      }
    });
  }
}
