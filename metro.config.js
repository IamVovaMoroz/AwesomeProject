const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      assetExts: [...assetExts, 'jpg', 'png', 'jpeg'], // добавьте расширения изображений, которые вы используете
    },
  };
})();
