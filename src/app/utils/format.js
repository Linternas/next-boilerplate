const getFormatedDate = (date) => {
  if (!date) return;
  return date.split('T')[0].replace(/-/g, '.');
};

export { getFormatedDate };
