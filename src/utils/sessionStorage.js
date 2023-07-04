const setSessionStorage = (name, value) => {
  sessionStorage.setItem(name, value);
};

const getSessionStorage = (name) => {
  return sessionStorage.getItem(name);
};

const removeSessionStorage = (name) => {
  sessionStorage.removeItem(name);
};

export { setSessionStorage, getSessionStorage, removeSessionStorage };
