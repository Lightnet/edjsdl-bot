const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

var frontWebpackConfig = {
    mode: "development",
    entry: './src/client/clientEntryPoint.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    module: {
        rules: [
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'raw-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')//,
                    //path.resolve(__dirname, 'node_modules/lance-gg'),
                    //fs.realpathSync('./node_modules/lance-gg')
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-env'].map(require.resolve)
                }
            }
        ]
    }//,
    //resolve: {
        //alias: { 
          //"lance": path.resolve(__dirname, 'node_modules/lance-gg/src')
        //}
    //}
};


/* BACK-END CONFIG */
/*
var backWebpackConfig = {
    mode: "development",
    target : 'node',
    entry: "./main.js",
    //output: {
        //path: path.resolve(__dirname, "dist"),
        //filename: "app.js"
    //},
    //externals: nodeModules,
    watch:true,
    watchOptions : {
        aggregateTimeout: 300,
        poll: 1000,
        //ignored: /node_modules/
    },
    //devtool : NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
    plugins : [
        //new webpack.NoErrorsPlugin(),
        //new webpack.DefinePlugin({
          //NODE_ENV : JSON.stringify(NODE_ENV)
        //})
    ],module : {
        rules : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                //loader : 'babel-loader',
                use: {
                    loader: "babel-loader"
                }//,
                //query: {
                    //presets: ['env']
                //}
            }
        ]
    }
}
*/
//var configuration = [frontWebpackConfig,backWebpackConfig ];
var configuration = [frontWebpackConfig ];
configuration.watch = true;
module.exports = configuration;