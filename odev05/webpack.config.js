const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports ={
    entry: './src/index.jsx',
    module:{
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }],
        },  {
            test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        contentBase:'./public',
        injectClient:false,
        port:"3030"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "Card"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    }
}