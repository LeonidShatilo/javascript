import {
  INPUT_BASE,
  INPUT_SYMBOL,
  setBaseInput,
  setSymbolInput,
  values,
} from './utils.js';

export function convert(inputName) {
  switch (inputName) {
    case undefined:
    case 'base':
      const SYMBOL_RESULT = Number(INPUT_BASE.value) * values.symbol;

      setSymbolInput(SYMBOL_RESULT);
      break;

    case 'symbol':
      const BASE_RESULT =
        (values.base / values.symbol) * Number(INPUT_SYMBOL.value);

      setBaseInput(BASE_RESULT);
      break;
  }
}
