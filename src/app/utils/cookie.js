const getCookie = (cookieName) => {
  if (typeof window !== 'object') return;

  cookieName += '=';

  const cookieData = document.cookie;
  let start = cookieData.indexOf(cookieName);
  let cookieValue = '';

  if (start !== -1) {
    start += cookieName.length;
    let end = cookieData.indexOf(';', start);
    if (end === -1) end = cookieData.length;
    cookieValue = cookieData.substring(start, end);
  }

  return unescape(cookieValue);
};

const getCookieAll = () => {
  if (typeof window !== 'object') return;

  const cookieData = document.cookie.split('; ');
  const cookieObj = {};

  for (const cookie of cookieData) {
    const cookieName = cookie.split('=')[0];
    const cookieValue = cookie.split('=')[1];

    cookieObj[cookieName] = cookieValue;
  }

  return cookieObj;
};

const setCookie = (cookieName, cookieValue) => {
  if (typeof window !== 'object') return;

  if (cookieName === undefined || cookieName === null) {
    return 'cookie name is undefined or null';
  } else if (cookieValue === undefined || cookieValue === null) {
    return 'cookie value is undefined or null';
  } else {
    if (getCookie(cookieName) !== '') {
      removeCookie(cookieName);
    }

    document.cookie = `${cookieName}=${cookieValue}; path=/`;
    return true;
  }
};

const removeCookie = (cookieName) => {
  if (typeof window !== 'object') return;

  // 쿠키 값을 없애고 보존기간을 과거로 한다
  document.cookie = cookieName + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

export { getCookie, getCookieAll, setCookie, removeCookie };
