const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/index.js',
    },

    output : {
        publicPath: '/',
        path: path.join(__dirname, "/app"),
        filename: '[name].js',
    },
    devServer: {
        contentBase: path.join(__dirname, "/app"),
        port: 1500,
        writeToDisk: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "assets/images",
                        }
                    },
                ],
            },

            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                }
            },
        ]
    },
    plugins: [
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css"
        }),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "new-account.html",
            template: "./src/new-account.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "Sign-in.html",
            template: "./src/Sign-in.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "egypt.html",
            template: "./src/egypt.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "Istanbul.html",
            template: "./src/Istanbul.html",
            chunks: ['app']
        }),
    ]
}