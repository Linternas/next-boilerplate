const setInfiniteDataToSession = (sessionObj) => {
  sessionStorage.setItem('infinitescroll', JSON.stringify(sessionObj));
};

const getInfiniteDataToSession = () => {
  let data = sessionStorage.getItem('infinitescroll');
  sessionStorage.getItem('infinitescroll');

  return data;
};

export { getInfiniteDataToSession, setInfiniteDataToSession };
