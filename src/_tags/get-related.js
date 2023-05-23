const { getRelatedItems } = require('./_utils.js');

module.exports = function (collection, parentTag) {
  // get all items in this collection (e.g. 'content:posts') that are related to the parentTag (e.g. 'team:digitisation')

  if (collection === undefined) {
    return [];
  }

  return getRelatedItems(this.ctx, parentTag, collection);
};
