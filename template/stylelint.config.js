module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['stylelint-scss'],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'no-duplicate-selectors': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-named': 'never',
    'selector-no-qualifying-type': true,
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-operator-space-after': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'number-leading-zero': null,
    'function-url-quotes': 'always',
    'font-family-name-quotes': 'always-where-recommended',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'always',
    'at-rule-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-no-vendor-prefix': true,
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'at-rule-no-unknown': null,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,

    // scss plugin – https://www.npmjs.com/package/stylelint-scss
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'always',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/double-slash-comment-empty-line-before': 'always',
    'scss/declaration-nested-properties': 'never',
    'scss/selector-no-redundant-nesting-selector': true
  }
};