module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'plugin:json/recommended', 'plugin:storybook/recommended'],
  globals: {
    JSX: true,
    React: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'no-use-extend-native', 'sort-destructure-keys'],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'jest.setup.ts',
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/*.stories.js',
          '**/*.stories.jsx',
          '**/*.stories.ts',
          '**/*.stories.tsx',
        ],
      },
    ],
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 0,
    'max-len': ['error', {
      code: 80,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      tabWidth: 2,
    }],
    'max-params': ['error', {
      max: 3,
    }],
    'multiline-ternary': ['error', 'always-multiline'],
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    semi: ['error', 'never'],
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys': ['error'],
    'sort-vars': ['error'],
    'space-before-function-paren': [2, 'always'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
