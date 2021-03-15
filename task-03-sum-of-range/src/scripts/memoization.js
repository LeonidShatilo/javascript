const convertArg = (arg) => arg.toString();
const generateKey = (args) => args.map(convertArg).join('–');

export const memorizeFunctionCall = (fn) => {
  const CACHE = {};

  return (...args) => {
    const KEY = generateKey(args);
    const VALUE = CACHE[KEY];

    try {
      if (VALUE) {
        console.log('Memoization result:', VALUE);
        return VALUE;
      } else {
        const RESULT = fn(...args);
        CACHE[KEY] = RESULT;
        console.log('Call result:', RESULT);
        return RESULT;
      }
    } catch (error) {
      console.error(`${error}`);
    }
  };
};
