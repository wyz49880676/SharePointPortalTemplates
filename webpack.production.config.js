const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build-prod",
        filename: "bundle-[hash].js"
    },
    devtool: "none",
    devServer: {
        contentBase: "./public",
        inline: true,                   //自动刷新页面
        historyApiFallback: true,	    //所有的跳转将指向index.html
        hot: true                       //热加载，组件代码修改后实时刷新页面
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,      //匹配所处理文件的正则表达式
                use: {
                    loader: "babel-loader",   //loader的名字
                },
                exclude: /node_modules/     //过滤掉这个文件夹
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true,         //指定启用css modules
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ],
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('********This is a sample********'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.template.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin('build-prod/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
}