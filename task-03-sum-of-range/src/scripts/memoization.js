import { ERROR_TEXT } from './utils.js';

const convertArg = (arg) => arg.toString();
const generateKey = (args) => args.map(convertArg).join('–');
const addBlank = () => (ERROR_TEXT.innerHTML = '&nbsp;');

export const memorizeFunctionCall = (fn) => {
  const CACHE = {};

  return (...args) => {
    const KEY = generateKey(args);
    const VALUE = CACHE[KEY];

    try {
      if (VALUE) {
        addBlank();
        console.log('Memoization result:', VALUE);

        return VALUE;
      } else {
        const RESULT = fn(...args);
        CACHE[KEY] = RESULT;
        addBlank();
        console.log('Call result:', RESULT);

        return RESULT;
      }
    } catch (error) {
      ERROR_TEXT.innerHTML = error;
      ERROR_TEXT.classList.add('error--active');
      console.error(`${error}`);
    }
  };
};
