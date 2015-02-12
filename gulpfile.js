var elixir = require('laravel-elixir');

// Configure elixir to use different directories

// elixir.config.assetsDir = 'app/assets/';
// elixir.config.cssOutput = 'public_html/css';
// elixir.config.jsOutput: 'public/js',
// elixir.config.bowerDir: 'vendor/bower_components',

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
  mix.sass('app.sass')
     .copy('vendor/bower_components/jquery/dist/jquery.min.js', 'public/js/jquery.min.js')
     .scripts([
       'public/js/jquery.min.js',
       'resources/assets/js/app.js'
     ], 'public/js', './')
     .version(['css/app.css', 'js/all.js']);
});
