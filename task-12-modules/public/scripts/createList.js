const utils = await import('./utils.js');
const codes = await import('./codes.js');

export function createList(listName) {
  codes.CODES.forEach((option) => {
    const OPTION = document.createElement('option');

    OPTION.setAttribute('value', `${option}`);

    switch (listName) {
      case 'base':
        option === utils.DEFAULT_BASE_CODE &&
          OPTION.setAttribute('selected', '');
        utils.SELECT_BASE.append(OPTION);
        break;

      case 'symbol':
        option === utils.DEFAULT_SYMBOL_CODE &&
          OPTION.setAttribute('selected', '');
        utils.SELECT_SYMBOL.append(OPTION);
        break;
    }

    OPTION.textContent = option;
  });
}
