const rules = [
  './rules/async-await-promises.yml',
  './rules/codestyle.yml',
  './rules/functions.yml',
  './rules/imports.yml',
  './rules/react-jsx.yml',
  './rules/flow.yml',
  './rules/lodash.yml',
]

module.exports = {
  extends: [
    'airbnb',
    ...rules.map(require.resolve),
  ],
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'lodash',
  ],
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    Generator: true,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
}
