function checkArguments(min, max) {
  if (typeof min === 'number' && typeof max === 'number') {
    if (Math.floor(min) !== min || Math.floor(max) !== max) {
      throw new Error('The argument is not integer.');
    }
  } else {
    throw new Error('The argument is not a number.');
  }

  if (min > max) {
    [min, max] = [max, min];
    console.warn(
      'The minimum value is greater than the maximum value. The order of the arguments has been changed.'
    );
  }

  return [min, max];
}

function checkSumForMaxSafeIntegerValue(sumOfRange) {
  if (Number.isSafeInteger(sumOfRange)) {
    return sumOfRange;
  } else {
    throw new Error('The result exceeds the maximum safe integer value.');
  }
}

function сalculateSumOfRange(min, max) {
  const [MIN, MAX] = checkArguments(min, max);

  return ((MAX + MIN) * (MAX - MIN + 1)) / 2;
}

function range(min, max) {
  try {
    const SUM_OF_RANGE = сalculateSumOfRange(min, max);

    return checkSumForMaxSafeIntegerValue(SUM_OF_RANGE);
  } catch (error) {
    console.error(`${error}`);
  }
}
