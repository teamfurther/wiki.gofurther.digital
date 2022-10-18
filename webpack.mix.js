const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath(path.resolve('./'));

mix.js('src/js/site.js', 'dist/js').sourceMaps();

mix.sass('src/sass/site.scss', 'dist/css').options({
    processCssUrls: false
}).sourceMaps();

mix.copyDirectory('src/img', 'dist/img', false);
mix.copyDirectory('src/media', 'dist/media', false);

// Only do cache-busting in production
if (mix.inProduction()) {
    mix.version();
}
