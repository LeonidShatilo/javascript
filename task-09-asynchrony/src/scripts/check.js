export function isNumber(value) {
  return (
    Number.isInteger(Number(value)) ||
    (Number(value) == value && value % 1 !== 0)
  );
}

export function isOperator(value) {
  switch (value) {
    case '+':
    case '-':
    case '−':
    case '*':
    case '×':
    case '/':
    case '÷':
      return true;

    default:
      return false;
  }
}

export function isTwoNumbers(array) {
  const [A, B] = array;

  return isNumber(A) && isNumber(B);
}

export function isWrongArrayData(array) {
  if (array.length === 0) {
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    const VALUE = array[i];

    if (!isNumber(VALUE) && !isOperator(VALUE)) {
      return true;
    }
  }
}
