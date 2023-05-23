const { checkTag } = require('./_utils.js');

module.exports = function (tags) {
  return tags.filter(checkTag);
};
