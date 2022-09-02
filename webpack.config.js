const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { DEV, DEBUG } = process.env;
process.env.BABEL_ENV = DEV ? 'development' : 'production';
process.env.NODE_ENV = DEV ? 'development' : 'production';

module.exports = {
    mode: DEV ? 'development' : 'production',
    devtool: DEV && 'source-map',
    entry:'./src/index.tsx',
    output:{
        path:path.join(__dirname,'/dist'),
        filename : DEV ? 'js/[name].[hash:8].js' : 'js/[name].[contenthash:8].js'
    },
    devServer:{
        port:8080
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.tsx$/,
                exclude:/node_modules/,
                loader:'ts-loader',
            },
            {
                test:/\.(less|css)$/,
                exclude:/\.module\.less$/,
                use:[
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                            sourceMap: !!DEV,
                        }
                    },
                    {
                        loader:'less-loader',
                        options:{
                            sourceMap: !!DEV,
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 2,
                      sourceMap: !!DEV,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: !!DEV,
                    },
                  },
                ],
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'/src/index.html')
        })
    ]
}