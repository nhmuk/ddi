module.exports = function (str) {
  return str === undefined ? '' : str.replace(/[^A-Z]+/g, '');
};
