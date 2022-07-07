module.exports = {
    root: true,
    env: {
      node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'plugin:vuejs-accessibility/recommended',
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier', 'vuejs-accessibility'],
    rules: {
      'prettier/prettier': [
        2,
        {
          printWidth: 120,
          singleQuote: true,
          semi: false,
          endOfLine: 'auto',
          trailingComma: 'all',
        },
      ],
      '@typescript-eslint/ban-ts-comment': 0,
      'vue/multi-word-component-names': 0,
      'vue/v-on-event-hyphenation': [
        'error',
        'always',
        {
          autofix: true,
        },
      ],
    },
    ignorePatterns: ['dist'],
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly',
    },
  }
  