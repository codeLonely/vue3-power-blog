module.exports = {
    root: true,
    plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    customSyntax: 'postcss-html',
    rules: {
        // 排序
        "order/properties-order": [],
        "plugin/rational-order": [true, {
            "border-in-box-model": false,
            "empty-line-between-groups": true,
        }],


        // 和sort plugin 中 "empty-line-between-groups": true  冲突  需关闭
        'declaration-empty-line-before': null,

        // 存在自定义scss函数 需关闭
        'function-no-unknown': null,
        // 关闭选择器命名限制规则
        'selector-class-pattern': null,

        // 将global伪类排除 unknown
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
        // 规则之间保留空行
        'rule-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'first-nested'],
            },
        ],

        'declaration-bang-space-before': 'always',
    },
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
            extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
        },
    ],
}
