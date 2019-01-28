const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var outPath = path.resolve(__dirname, 'build');




module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: outPath,
        filename: "bundle.js"
    },
    resolve: {
        extensions:['.tsx','.ts','.js','.json']
    },
    module: {
        rules:[

            {
                test: /\.less$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                        }
                    },

                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]
};