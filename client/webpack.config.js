const path = require("path");
//Webpack Analyzer
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: "source-map",
    context: path.join(__dirname, "src"),
    entry: ["./index.jsx"],
    output: {
        path: path.join(__dirname, "../server/web"),
        filename: "bundle.js",
        chunkFilename: "[name].js"
    },
    performance: {
        hints: false
    },
    optimization: {
        minimize: process.env.NODE_ENV === "production"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ],
    },
    // plugins: [
    //     new WebpackBundleAnalyzer()
    // ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};
