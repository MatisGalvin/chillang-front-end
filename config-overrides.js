// config-overrides.js
// This filed is used to compile correctly the alias imports from tsconfig.paths.json
const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = function override(config) {
  return alias(configPaths("./tsconfig.paths.json"))(config);
};
