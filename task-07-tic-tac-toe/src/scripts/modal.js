const MODAL = document.querySelector('.modal');
const MODAL_MESSAGE = document.querySelector('.modal__message');
export const MODAL_RESTART_BUTTON = document.querySelector('.modal__restart-button');

export function showModal(message) {
  MODAL_MESSAGE.textContent = message;
  MODAL.classList.add('modal__visible');
}

export function hideModal() {
  MODAL.classList.add('modal__hide');
  MODAL_MESSAGE.textContent = '';

  setTimeout(() => {
    MODAL.classList.remove('modal__visible');
    MODAL.classList.remove('modal__hide');
  }, 1000);
}
