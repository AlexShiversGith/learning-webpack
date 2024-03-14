const path = require('path')


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundler.js',
        path: path.resolve(__dirname, 'dist'),
    }
}