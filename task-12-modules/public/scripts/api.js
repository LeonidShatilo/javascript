const utils = await import('./utils.js');
const errorModule = await import('./error.js');
const convert = await import('./convert.js');

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
