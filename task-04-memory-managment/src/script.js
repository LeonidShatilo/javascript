let count = 0;

const counter = () => count++;

function createSomeElements() {
  const NODES = document.getElementById('nodes');
  const DIV = document.createElement('div');
  const COUNTER = document.createElement('span');
  const HYPHEN = document.createElement('span');
  const TIME = document.createElement('span');
  const MS = document.createElement('span');

  DIV.classList.add('data');
  TIME.classList.add('time');
  COUNTER.classList.add('call-number');

  COUNTER.appendChild(document.createTextNode(`${count}`));
  DIV.appendChild(COUNTER);

  HYPHEN.appendChild(document.createTextNode(' – '));
  DIV.appendChild(HYPHEN);

  TIME.appendChild(document.createTextNode(`${Date.now()}`));
  DIV.appendChild(TIME);

  MS.appendChild(document.createTextNode(' ms'));
  DIV.appendChild(MS);

  NODES.appendChild(DIV);
}

function calculateTime() {
  const TIME = document.querySelectorAll('.time');
  const START = Number(TIME[0].textContent);
  const END = Number(TIME[TIME.length - 1].textContent);
  const RESULT = END - START;

  return RESULT;
}

function getLastCallNumber() {
  const NUMBERS_OF_CALL = document.querySelectorAll('.call-number');
  const LAST = NUMBERS_OF_CALL.length - 1;
  const LAST_CALL_NUMBER = Number(NUMBERS_OF_CALL[LAST].textContent);

  return LAST_CALL_NUMBER;
}

function getStats() {
  const TIME = calculateTime();
  const LAST_CALL_NUMBER = getLastCallNumber();

  console.group(`Statistics`);
  console.log(`Number of calls: ${LAST_CALL_NUMBER}`);
  console.log(`Spent time: ${TIME} ms`);
}

function run() {
  counter();
  createSomeElements();
  run();
}

function runWithTimeout() {
  counter();
  createSomeElements();
  setTimeout(runWithTimeout, 100);
}
