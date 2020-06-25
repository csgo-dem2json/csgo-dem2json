#!/usr/bin/env node
var babelify = require('babelify');
var browserify = require('browserify');
var tsify = require('tsify');

browserify()
    .add('src/index.ts')
    .plugin(tsify)
    .transform(babelify, {
        extensions: [ '.tsx', '.ts' ],
        presets: ["@babel/preset-env"],
        // plugins: ['@babel/plugin-transform-modules-commonjs'],
        sourceMaps: true,
        // global: true,
        ignore: [
          /\/node_modules\//,
        ],
    })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(process.stdout);
