const utils = await import('./utils.js');

export function convert(inputName) {
  switch (inputName) {
    case undefined:
    case 'base':
      const SYMBOL_RESULT =
        Number(utils.INPUT_BASE.value) * utils.values.symbol;

      utils.setSymbolInput(SYMBOL_RESULT);
      break;

    case 'symbol':
      const BASE_RESULT =
        (utils.values.base / values.symbol) * Number(utils.INPUT_SYMBOL.value);

      utils.setBaseInput(BASE_RESULT);
      break;
  }
}
