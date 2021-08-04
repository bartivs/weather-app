const path = require('path');
module.exports ={
    entry:path.resolve(__dirname, './src/index.js'),
    output : {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' },
                {  test: /\.css$/i, use: ['style-loader', 'css-loader']},
                {test:/\.js$/, 
                 include:/src/,
                 use:{
                     loader:"babel-loader",
                     options: {
                        presets: ["@babel/preset-react","@babel/preset-env"]
                        }
                 }
                },
        ]
    }
}