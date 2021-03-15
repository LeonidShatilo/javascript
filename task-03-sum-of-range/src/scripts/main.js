import { memorizeFunctionCall } from './memoization.js';
import { calculateSumOfRange } from './calculate.js';

const range = memorizeFunctionCall(calculateSumOfRange);
