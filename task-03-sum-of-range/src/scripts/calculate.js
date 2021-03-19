import { checkArguments, checkSumForMaxSafeIntegerValue } from './check.js';

export function calculateSumOfRange(min, max) {
  const [MIN, MAX] = checkArguments(min, max);
  const SUM_OF_RANGE = ((MAX + MIN) * (MAX - MIN + 1)) / 2;

  return checkSumForMaxSafeIntegerValue(SUM_OF_RANGE);
}
