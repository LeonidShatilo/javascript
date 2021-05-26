const utils = await import('./utils.js');
const api = await import('./api.js');
const convert = await import('./convert.js');

let isOpenList = false;

function clickSelect(nameSelect) {
  isOpenList = !isOpenList;

  if (isOpenList) {
    utils.rotateArrow(nameSelect);
  } else {
    nameSelect === 'base'
      ? utils.ARROW_BASE.classList.remove('arrow--rotate')
      : utils.ARROW_SYMBOL.classList.remove('arrow--rotate');
  }
}

function changeSelect() {
  api.getRateData(utils.SELECT_BASE.value, utils.SELECT_SYMBOL.value);
}

function changeInput(nameInput) {
  while (utils.INPUT_BASE.value.charAt(0) === '0') {
    if (
      utils.INPUT_BASE.value.length === 1 ||
      utils.INPUT_BASE.value.charAt(1) == '.'
    ) {
      break;
    }

    utils.INPUT_BASE.value = utils.INPUT_BASE.value.substr(
      1,
      utils.INPUT_BASE.value.length - 1
    );
  }

  switch (nameInput) {
    case 'base':
      if (utils.INPUT_BASE.value === '') {
        utils.INPUT_SYMBOL.value = '';

        return null;
      }

      convert.convert(nameInput);
      break;

    case 'symbol':
      if (utils.INPUT_SYMBOL.value === '') {
        utils.INPUT_BASE.value = '';

        return null;
      }

      convert.convert(nameInput);
      break;
  }
}

utils.SELECT_BASE.addEventListener('click', () => clickSelect('base'));
utils.SELECT_SYMBOL.addEventListener('click', () => clickSelect('symbol'));

utils.SELECT_BASE.addEventListener('change', () => changeSelect());
utils.SELECT_SYMBOL.addEventListener('change', () => changeSelect());

utils.INPUT_BASE.addEventListener('input', () => changeInput('base'));
utils.INPUT_SYMBOL.addEventListener('input', () => changeInput('symbol'));

window.addEventListener('click', (event) => {
  if (
    !event.target.className.includes('arrow') &&
    !event.target.className.includes('select')
  ) {
    isOpenList = false;
    utils.ARROW_BASE.classList.remove('arrow--rotate');
    utils.ARROW_SYMBOL.classList.remove('arrow--rotate');
  }
});
