let projectFolder = 'dist',
    sourceFolder = '#src';
let path = {
        build: {
            html: projectFolder + '/',
            css: projectFolder + '/css/',
            img: projectFolder + '/img/',
            js: projectFolder + '/js/'
        },
        src: {
            html: sourceFolder + '/*.html',
            css: sourceFolder + '/scss/style.scss',
            js: sourceFolder + '/js/*.js',
            img: sourceFolder + '/img/**/*'
        },
        watch: {
            html: sourceFolder + '/**/*.html',
            css: sourceFolder + '/scss/**/*.scss',
            js: sourceFolder + '/js/**/*.js',
            img: sourceFolder + '/img/**/*'
        },
        clean: './' + projectFolder + '/'
    };

let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    del = require('del'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

const browserSync = params => {
    browsersync.init({
        server: {
            baseDir: path.clean
        },
        port: 3000,
        notify: false
    })
}

const html = () => {
    return src(path.src.html)
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

const clean = () => {
    return del(path.clean)
}

const css = () => {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

const img = () => {
    return src(path.src.img)
        .pipe(dest(path.build.img))
}

const js = () => {
    return src(path.src.js)
        .pipe(dest(path.build.js))
}

const watchFiles = () => {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], img);
}

let build = gulp.series(clean, gulp.parallel(css, html, js, img));
let watch = gulp.parallel(browserSync, build, watchFiles);

exports.img = img;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

const a = 0;