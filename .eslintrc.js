module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['prettier', 'ember'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }]
  },
  overrides: [
    // node files
    {
      files: ['index.js', 'testem.js', 'ember-cli-build.js', 'config/**/*.js', 'tests/dummy/config/**/*.js'],
      excludedFiles: ['app/**', 'addon/**', 'tests/dummy/app/**'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ]
};
