const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports ={
    entry: './src/index.js',
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