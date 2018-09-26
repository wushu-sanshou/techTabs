const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader' ]
            },
        ]
        },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPlugin({
            template:'./src/index.html'
        })
    ]
};