const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin')

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

const commonModule = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env'],
                },
            },
        },
    ],
};

/* BACK-END CONFIG */
var backWebpackConfig = {
    mode: "development",
    target : 'node',
    //target : 'async-node',
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "backend.js"
    },
    //watch:true,
    watchOptions : {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    plugins: [
        //new webpack.IgnorePlugin(/\.(css|less)$/),
        //new webpack.BannerPlugin('require("source-map-support").install();',
                             //{ raw: true, entryOnly: false }),
        //new StartServerPlugin('server.js'),
        //new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(),
        //new webpack.DefinePlugin({
            //"process.env": {
                //"BUILD_TARGET": JSON.stringify('server')
            //}
        //}),
    ],
    module : commonModule,
    target: 'node',
    externals: [nodeExternals()],
}

var configuration = [frontWebpackConfig,backWebpackConfig ];
//var configuration = [frontWebpackConfig ];
//configuration.watch = true;
module.exports = configuration;