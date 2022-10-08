module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    // 使用使用:any
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    // 组件属性顺序
    'vue/attributes-order': 'warn',
    // 注释开头和结尾在同一行
    'vue/html-comment-content-newline': 'warn',
    // 注释开头和结尾有空格
    'vue/html-comment-content-spacing': 'warn',
    'vue/multi-word-component-names': 'off',
    // component name要和文件名匹配
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'jsx', '.ts', '.tsx', 'vue'], // 检测的拓展名
        shouldMatchCase: true // 需要匹配大小写
      }
    ],
    // 禁止空template、script、style
    'vue/no-empty-component-block': 'warn',
    // 禁止不必要的插值表达式，如{{ 3 }}，可直接用3代替
    'vue/no-useless-mustaches': 'warn',

    // console、debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/max-attributes-per-line': 'off',

    'vue/multiline-html-element-content-newline': 'warn',
    // 关闭单html标签，内容需换行，因为其和prettier冲突
    'vue/singleline-html-element-content-newline': 'off',
    'no-tabs': 'off',

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
