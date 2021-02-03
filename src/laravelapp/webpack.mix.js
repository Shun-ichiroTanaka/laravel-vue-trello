const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix
.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css', {
    sassOptions: {
      outputStyle: 'compressed'
    }
})
.options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],

    terser: {
        terserOptions: {
            compress: {
                drop_console: true
            }
        }
    }
}).purgeCss()


// ブラウザーリロード
.browserSync({
    proxy: {
        target: "http://localhost:8000/",
    },
    files: [
        './resources/**/*',
        './public/**/*',
    ],
    open: false,
    reloadOnRestart: true,
})

// キャッシュ削除
// if(mix.inProduction()){
    // mix.
    .version();
// }
