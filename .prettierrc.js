module.exports = {
    ...require('mwts/.prettierrc.json'),
    printWidth: 80, //单行长度
    semi: false,
    useTabs: false,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'es5',
    proseWrap: 'never',
    endOfLine: 'lf', //结束行形式
    overrides: [
        {
            files: ['src/**/*.tsx', 'src/**/*.ts'],
            options: {
                parser: 'typescript',
            },
        },
    ],
}
