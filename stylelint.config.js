module.exports = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2,
    'block-closing-brace-space-before': 'always-single-line'
  }
};
