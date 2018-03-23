const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        QuickLink: __dirname + "/src/Webparts/QuickLink/index.jsx",
        Navigation: __dirname + "/src/Webparts/Navigation/index.jsx"
    },
    output: {
        path: __dirname + "/dist/development/Webparts",
        filename: "[name]/[name].js"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",    // Compiles jsx to js
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /(\.css|\.less)$/,
                use: [{
                        loader: "less-loader"  // Compiles Less to CSS first
                    },
                    MiniCssExtractPlugin.loader,   // Compiles CSS to a seperated file
                    "css-loader"
                ]                   
            },
            // {
            //     test: /\.(png|jpg|gif)$/,  // Compiles images
            //     use: [{
            //         loader: "file-loader",
            //         options: {}
            //     }]
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name]/[name].css"})
    ]
}