import {
  DEFAULT_BASE_CODE,
  DEFAULT_SYMBOL_CODE,
  SELECT_BASE,
  SELECT_SYMBOL,
} from './utils.js';
import { CODES } from './codes.js';

export function createList(listName) {
  CODES.forEach((option) => {
    const OPTION = document.createElement('option');

    OPTION.setAttribute('value', `${option}`);

    switch (listName) {
      case 'base':
        option === DEFAULT_BASE_CODE && OPTION.setAttribute('selected', '');
        SELECT_BASE.append(OPTION);
        break;

      case 'symbol':
        option === DEFAULT_SYMBOL_CODE && OPTION.setAttribute('selected', '');
        SELECT_SYMBOL.append(OPTION);
        break;
    }

    OPTION.textContent = option;
  });
}
