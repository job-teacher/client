const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
      // babelTransformerPath 추가
      babelTransformerPath: require.resolve('metro-react-native-babel-preset'),
    }),
  },
  resolver: {
    sourceExts: ['js', 'json', 'jsx', 'mjs', 'ts', 'tsx'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
