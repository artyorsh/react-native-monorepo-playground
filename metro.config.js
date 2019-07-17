/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const structure = require('./structure');
const monorepoResolver = require('./metro.resolver');

const { extraNodeModules, watchFolders } = monorepoResolver(structure);

module.exports = {
  resolver: {
    extraNodeModules: {
      ...extraNodeModules,
      '@babel/runtime': path.resolve('node_modules', '@babel/runtime'),
      'react': path.resolve('node_modules', 'react'),
      'react-is': path.resolve('node_modules', 'react-is'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: watchFolders,
};
