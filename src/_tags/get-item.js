const { getItem } = require('../_utils.js');

module.exports = function (slug, contentType) {
  // get the page with the given slug within the contentType

  if (slug === undefined) {
    return [];
  }

  const collection = this.ctx.collections[contentType];

  if (collection === undefined) {
    return [];
  }

  if (Array.isArray(slug)) {
    return slug.map((s) => getItem(collection, s)).filter((i) => i !== null);
  } else {
    return getItem(collection, slug) || {};
  }
};
