export const SELECT_BASE = document.querySelector('.base__select');
export const SELECT_SYMBOL = document.querySelector('.symbol__select');
export const INPUT_BASE = document.querySelector('.base__input');
export const INPUT_SYMBOL = document.querySelector('.symbol__input');
export const ARROW_BASE = document.querySelector('.base__arrow');
export const ARROW_SYMBOL = document.querySelector('.symbol__arrow');

export const DEFAULT_BASE_CODE = 'USD';
export const DEFAULT_SYMBOL_CODE = 'CAD';

export let values = {
  base: 1,
  symbol: 0,
};

export function setSymbolInput(value) {
  INPUT_SYMBOL.value = Number(value.toFixed(4));
}

export function setBaseInput(value) {
  INPUT_BASE.value = Number(value.toFixed(4));
}

export function rotateArrow(nameSelect) {
  switch (nameSelect) {
    case 'base':
      ARROW_BASE.classList.add('arrow--rotate');
      break;

    case 'symbol':
      ARROW_SYMBOL.classList.add('arrow--rotate');
      break;
  }
}
