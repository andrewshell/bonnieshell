function storyIndex(stories, fileSlug) {
  return stories.findIndex((story) => {
    return story.slug === fileSlug;
  })
}

module.exports = {
  layout: 'story.njk',
  eleventyComputed: {
    prev: (data) => {
      const idx = storyIndex(data.stories, data.page.fileSlug);
      if (idx === -1) {
        return false;
      }
      if (idx === 0) {
        return false;
      }
      return data.stories[idx - 1];
    },
    next: (data) => {
      const idx = storyIndex(data.stories, data.page.fileSlug);
      if (idx === -1) {
        return false;
      }
      if (idx === data.stories.length - 1) {
        return false;
      }
      return data.stories[idx + 1];
    },
  },
};
