module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["react-native-worklets-core/plugin", { processNestedWorklets: true }],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@app': './src/app',
            '@assets': './src/assets',
            '@core': './src/core',
            '@theme': './src/theme',
            '@shared': './src/shared',
          },
        },
      ],
    ],
  };
};