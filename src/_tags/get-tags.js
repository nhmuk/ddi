const { getTags } = require('../_utils.js');

module.exports = function (slug) {
  return getTags(this.ctx, slug);
};
