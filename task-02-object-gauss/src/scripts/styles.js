import { INPUT_NUMBER } from './utils.js';

export function useDefaultColors() {
  INPUT_NUMBER.classList.remove('input-focus-colors');
  INPUT_NUMBER.classList.remove('input-error-colors');
}

export function useFocusColors() {
  INPUT_NUMBER.classList.add('input-focus-colors');
  INPUT_NUMBER.classList.remove('input-error-colors');
}

export function useErrorColors() {
  INPUT_NUMBER.classList.add('input-error-colors');
}
