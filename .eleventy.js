const { minify } = require('terser');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.setServerOptions({
    watch: ['./_site/css/styles.css'],
  });

  eleventyConfig.addNunjucksAsyncFilter('jsmin', async function (code, cb) {
    try {
      const mini = await minify(code);
      cb(null, mini.code);
    } catch (e) {
      console.error(e);
      cb(null, code);
    }
  });

  eleventyConfig.addFilter(
    'related',
    require('./src/_tags/get-related.js'),
  );
  eleventyConfig.addFilter('item', require('./src/_tags/get-item.js'));
  eleventyConfig.addFilter('getTags', require('./src/_tags/get-tags.js'));
  eleventyConfig.addFilter('scrub', require('./src/_tags/scrub-tags.js'));
  eleventyConfig.addFilter('sort', require('./src/_tags/sort.js'));
  eleventyConfig.addFilter('initials', require('./src/_tags/initials.js'));

  eleventyConfig.addShortcode('subtags', require('./src/_tags/subtags.js'));

  eleventyConfig.addCollection('featured', (templateCollection) => {
    return templateCollection
      .getAll()
      .filter((c) => c.data.featured)
      .slice(0, 6);
  });
  eleventyConfig.addCollection('featured:projects', (templateCollection) => {
    return templateCollection
      .getAll()
      .filter((c) => {
        const isProject =
          c.data.tags && c.data.tags.includes('content:project');
        const isFeatured = c.data.featured;
        return isProject && isFeatured;
      })
      .slice(0, 6);
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
