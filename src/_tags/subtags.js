const { getTags } = require('./_utils.js');

module.exports = function (parentContent) {
  const tags = getTags(this.ctx, parentContent);
  const tagHtmlList = tags.map(
    (t) => `<a href="/tags/${t}" class="pr-4 link-primary">#${t}</a>`,
  );
  return `<div class="flex flex-wrap">
        ${tagHtmlList.join('\n')}
    </div>`;
};
