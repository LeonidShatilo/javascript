const api = await import('./api.js');
const date = await import('./date.js');
const utils = await import('./utils.js');
const listener = await import('./listener.js');
const createList = await import('./createList.js');

date.showDate();
createList.createList('base');
createList.createList('symbol');
api.getRateData(utils.DEFAULT_BASE_CODE, utils.DEFAULT_SYMBOL_CODE);
