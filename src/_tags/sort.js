const { sortItems } = require('../_utils.js');

module.exports = function (collection, sortKey) {
  return sortItems(collection, sortKey);
};
