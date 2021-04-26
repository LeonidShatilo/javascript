const MIN_DELAY = 1000;
const MAX_DELAY = 3000;

export function randomDelay() {
  return Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
}
