const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix
.js('resources/js/app.js', 'public/js')
// sass
.sass('resources/sass/app.scss', 'public/css')

// tailwind
.options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
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
if(mix.inProduction()){
    mix.version()
}
