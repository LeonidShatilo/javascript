import { showDate } from './date.js';
import { getRateData } from './api.js';
import { createList } from './createList.js';
import { DEFAULT_BASE_CODE, DEFAULT_SYMBOL_CODE } from './utils.js';

showDate();
createList('base');
createList('symbol');
getRateData(DEFAULT_BASE_CODE, DEFAULT_SYMBOL_CODE);
