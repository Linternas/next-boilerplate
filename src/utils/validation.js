function hasValue(v) {
  if (typeof v === 'undefined' || typeof v === undefined || v === null) {
    return false;
  }

  if (typeof v.getMonth === 'function') {
    // datetime
    return true;
  }

  if (typeof v === 'object') {
    if (v.hasOwnProperty()) {
      // object
    } else {
      // array
      if (v.length > 0) {
        return true;
      } else {
      }
    }

    return false;
  }
  if (v === false) {
    return true;
  }
  if (v === 0) {
    return true;
  }
  return typeof v != 'undefined' && v != null && v != '';
}

export { hasValue };
