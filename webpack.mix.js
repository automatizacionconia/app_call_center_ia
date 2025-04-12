const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("resources/js/app.js", "public/js/app.js")
  .sass("resources/sass/app.scss", "public/css/app.css")
  .extract([
    "vue",
    "vuex",
    "vue-router",
    "axios",
    "lodash",
    "vuetify",
    "moment",
    "laravel-echo",
    "pusher-js",
  ])
  // .copyDirectory("resources/img", "public/img")
  // .copyDirectory("node_modules/@mdi/font/fonts", "public/fonts")
  .options({
    processCssUrls: false,
  })
  .webpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "resources/js"),
      },
    },
  });

if (mix.inProduction()) {
  mix.version();
}
