import { randomDelay } from './delay.js';

export function plus(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), randomDelay());
  });
}

export function minus(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a - b), randomDelay());
  });
}

export function multiply(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a * b), randomDelay());
  });
}

export function divide(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a / b), randomDelay());
  });
}

export async function applyOperator(a, b, operator) {
  switch (operator) {
    case '+':
      return await plus(a, b);

    case '-':
    case '−':
      return await minus(a, b);

    case '*':
    case '×':
      return await multiply(a, b);

    case '/':
    case '÷':
      return await divide(a, b);
  }
}
