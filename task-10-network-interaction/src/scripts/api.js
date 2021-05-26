import { convert } from './convert.js';
import { showError, hideError } from './error.js';
import { INPUT_BASE, setBaseInput, values } from './utils.js';

export function getRateData(base, symbol) {
  const API_KEY = 'bd32eedb8e3473a1406a';
  const URL = `https://free.currconv.com/api/v7/convert?q=${base}_${symbol}&compact=ultra&apiKey=${API_KEY}`;

  fetch(URL).then((response) => {
    response
      .json()
      .then((json) => {
        if (Object.keys(json).length !== 0 && !json.error) {
          return json;
        } else {
          const ERROR_MESSAGES =
            json.error !== undefined
              ? json.error
              : 'Request Error. Please try again later.';

          return Promise.reject(new Error(ERROR_MESSAGES));
        }
      })
      .then((data) => {
        const RATE = data[`${base}_${symbol}`];

        INPUT_BASE.value === '' && setBaseInput(1);
        values.symbol = RATE;
        convert();
        hideError();
      })
      .catch((error) => {
        showError(error);
        error(error);
      });
  });
}
