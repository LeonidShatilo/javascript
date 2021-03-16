import { MIN, MAX } from './utils.js';

export function useDefaultColors(input) {
  if (input === 'min') {
    MIN.classList.remove('input-focus-colors');
    MIN.classList.remove('input-error-colors');
  }
  if (input === 'max') {
    MAX.classList.remove('input-focus-colors');
    MAX.classList.remove('input-error-colors');
  }
}

export function useFocusColors(input) {
  if (input === 'min') {
    MIN.classList.add('input-focus-colors');
    MIN.classList.remove('input-error-colors');
  }
  if (input === 'max') {
    MAX.classList.add('input-focus-colors');
    MAX.classList.remove('input-error-colors');
  }
}

export function useErrorColors(input) {
  if (input === 'min') {
    MIN.classList.add('input-error-colors');
    MIN.classList.remove('input-focus-colors');
  }
  if (input === 'max') {
    MAX.classList.add('input-error-colors');
    MAX.classList.remove('input-focus-colors');
  }
}
