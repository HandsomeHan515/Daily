module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': ['error', 'always'], // 括号之前有空格
        'quote-props': 'off', // object的key使用引号
        'quotes': ['error', 'single'], // 使用单引号
        'indent': ['error', 4], // js tab size (包含 .vue 的 script)
    },
    globals: {
    }
}
