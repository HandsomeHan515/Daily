module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    edge: 12,
                    firefox: 2,
                    chrome: 10,
                    safari: 11.1,
                },
                useBuiltIns: 'usage',
                corejs: 3
            },
        ],
    ]
}
