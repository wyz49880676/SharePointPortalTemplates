https://www.jianshu.com/p/42e11515c10f

How to build a webpack project:
0. Install NodeJS as a webpack runtime env
1. run "npm install -g webpack" or "npm install --save-dev webpack" to install webpack
2. "npm init" to create package.json
3. Install the necessary modules (loader, plugin etc.):
   - React, React-DOM: "npm install --save react react-dom"
   - json-loader: a webpack build-in loader
   - babel-loader: "npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react", to compile   ES6 and JSX 
   - css-loader, style-loader: npm install --save-dev style-loader css-loader
   - less-loader, sass-loader, stylus-loader or use postcss-loader instead: npm install --save-dev postcss-loader autoprefixer
   - HTMLWebpackPlugin: npm install --save-dev html-webpack-plugin
   - extract plugins:
     OccurenceOrderPlugin:为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID build-in
     UglifyJsPlugin：压缩JS代码； build-in
     ExtractTextPlugin：分离CSS和JS文件 npm install --save-dev extract-text-webpack-plugin
   - clean-webpack-plugin: npm install clean-webpack-plugin --save-dev 
4. package.json
   "scripts": {
     "start": "webpack",
     "server": "webpack-dev-server --open",
     "test": "echo \"Error: no test specified\" && exit 1"
   },
5. webpack.config.js

6. .babelrc
{ "presets": ["react", "env"] }
7. postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}