const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ВАЖНО: правильный путь к вашему главному JS файлу
  entry: './src/index.js',  // если ваш файл называется app.js
    
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // очищает dist перед каждой сборкой
    },
    
    module: {
    rules: [
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        },
    ],
    },

    plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к вашему HTML
        filename: 'index.html',
    }),
    ],

    devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    open: true,
    hot: true, // Hot Module Replacement
    },

    mode: 'development',
};