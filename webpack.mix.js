const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        plugins: [
            new VuetifyLoaderPlugin({
                options: {}
            }),
        ]
    });
// const VuetifyLoaderPlugin = require('vuetify-loader/lin/plugin');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// var webpackConfig = {
//     plugins: [
//         new VuetifyLoaderPlugin(),
//         new CaseSensitivePathsPlugin()
//         // other plugins ...
//     ]

// }

// mix.webpackConfig(webpackConfig);

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
