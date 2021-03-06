const webpack = require("webpack");
const isProd = process.env.NODE_ENV === 'production';
const WDS_PORT = 7000;

var path = require("path");
module.exports = {
    entry: ["babel-polyfill", 'react-hot-loader/patch', "./src/client"],
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: isProd ? "/static/" : `http://localhost:${WDS_PORT}/dist/`
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ]
    },
    devtool: isProd ? false : "source-map",
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: WDS_PORT,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};