const utils = await import('./utils.js');
const errorModule = await import('./error.js');
const convert = await import('./convert.js');

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

        utils.INPUT_BASE.value === '' && utils.setBaseInput(1);
        utils.values.symbol = RATE;
        convert.convert();
        errorModule.hideError();
      })
      .catch((error) => {
        errorModule.showError(error);
        console.error(error);
      });
  });
}
