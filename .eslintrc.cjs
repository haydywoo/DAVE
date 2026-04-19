const isNode25 = typeof process !== 'undefined' && /^v25\./.test(process.version);

const plugins = ['react', 'react-hooks', 'import'];
const extendsConfig = [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript',
  'prettier',
];

if (!isNode25) {
  plugins.push('jsx-a11y');
  extendsConfig.splice(4, 0, 'plugin:jsx-a11y/recommended');
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins,
  extends: extendsConfig,
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
  },
};
