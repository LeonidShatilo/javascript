import { calculateSumOfRange } from './calculate.js';
import { memorizeFunctionCall } from './memoization.js';

export const range = memorizeFunctionCall(calculateSumOfRange);
