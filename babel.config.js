const path = require('path');
const structure = require('./structure');
const monorepoResolver = require('./babel.resolver');

const uiModuleAlias = {
  '@kitten/theme': path.resolve(__dirname, structure.path, 'src/framework/theme'),
  '@kitten/ui': path.resolve(__dirname, structure.path, 'src/framework/ui'),
};

const { root, alias } = monorepoResolver(structure);

const moduleResolverConfig = {
  root,
  alias: {
    ...alias,
    ...uiModuleAlias,
  }
};

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'module:metro-react-native-babel-preset',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
  ];

  return { presets, plugins };
};

