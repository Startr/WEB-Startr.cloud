// _data/eleventyComputed.js
module.exports = {
    eleventyNavigation: {
      key: data => data.page.fileSlug || data.title,
      //key: data => data.page.fileSlug,
      parent: data => {
        let parts = data.page.filePathStem.split("/");
        return parts.length > 2 ? parts[1] : null;
      },
      order: data => data.order || 0,
    }
  };
  