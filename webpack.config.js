'use strict';

const webpack = require("webpack");

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./test2.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {presets: ["es2015","stage-1"], "plugins": ["transform-decorators-legacy"]}
                }],
            }
        ]
    }


};