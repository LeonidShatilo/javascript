export let storageData;

export function setDataInLocalStorage(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
}

export function getDataInLocalStorage() {
  const LOCAL_STORAGE = localStorage.getItem('userData');

  if (LOCAL_STORAGE) {
    storageData = JSON.parse(LOCAL_STORAGE);
  }
}

getDataInLocalStorage();
