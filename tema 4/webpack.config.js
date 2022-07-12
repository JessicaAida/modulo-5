const path = require('path');
const HymlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.?js$/,
            exclude: /node-modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    },
    plugins: [
        new HymlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}