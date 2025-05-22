import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'public/**',
      'nuxt.config.mjs',
      'eslint.config.mjs', 
      'package.json',
      '.nuxt/**',
      'nuxt.config.ts'
    ]
  },
  
  // Vue files configuration
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'no-empty': ['error', { 'allowEmptyCatch': true }],
      'no-useless-escape': 'error',
      'array-bracket-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'no-console': 'off',
      'no-unused-vars': 'error' // 添加未使用变量检查
    }
  },
  
  // JS/TS files configuration
  {
    files: ['**/*.js', '**/*.ts', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'no-empty': ['error', { 'allowEmptyCatch': true }],
      'no-useless-escape': 'error',
      'array-bracket-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
      'no-console': 'off',
      'no-unused-vars': 'error' // 添加未使用变量检查
    }
  }
]