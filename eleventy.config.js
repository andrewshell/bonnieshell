const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPlugin(pluginImages);
};
