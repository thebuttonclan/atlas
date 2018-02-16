const path = require('path')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        admin: path.resolve(__dirname, 'src/js/admin.js'),
    },
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [

    ]
}
