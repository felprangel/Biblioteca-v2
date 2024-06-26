module.exports = {
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    trailingComma: 'none',
    endOfLine: 'lf',
    printWidth: 120,
    plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
    importOrder: ['^([a-z]|@(?!/)).*$', '^@/.*$', '^(../|./).*$'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
  }