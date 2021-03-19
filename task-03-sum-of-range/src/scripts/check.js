export function checkArguments(min, max) {
  if (typeof min === 'number' && typeof max === 'number') {
    if (Math.floor(min) !== min || Math.floor(max) !== max) {
      throw new Error('The argument is not integer.');
    }
  } else {
    throw new Error('The argument is not a number.');
  }

  if (min > max) {
    throw new Error('The minimum value is greater than the maximum value.');
  }

  return [min, max];
}

export function checkSumForMaxSafeIntegerValue(sumOfRange) {
  if (Number.isSafeInteger(sumOfRange)) {
    return sumOfRange;
  } else {
    throw new Error('The result exceeds the maximum safe integer value.');
  }
}
