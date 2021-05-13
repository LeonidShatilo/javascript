import { convert } from './convert.js';
import { showError, hideError } from './error.js';
import { INPUT_BASE, setBaseInput, values } from './utils.js';

export function getRateData(base, symbol) {
  const URL = `https://api.ratesapi.io/api/latest?base=${base}&symbols=${symbol}`;

  fetch(URL).then((response) => {
    response
      .json()
      .then((json) => {
        return response.ok ? json : Promise.reject(new Error(json.error));
      })
      .then((data) => {
        const RATE = data.rates[symbol];

        INPUT_BASE.value === '' && setBaseInput(1);
        values.symbol = RATE;
        convert();
        hideError();
      })
      .catch((error) => {
        showError(error);
        console.error(error);
      });
  });
}
