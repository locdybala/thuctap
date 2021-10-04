const {src,dest,watch,series}=require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss=require('gulp-postcss');
const cssnano=require('cssnano');
const terser=require('gulp-terser');
const browsersync=require('browser-sync').create();

//sass task

function scssTask(){
    return src('app/scss/style.scss',{sourcemaps:true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist',{sourcemaps:'.'}));
}
//javascript

function jsTask(){
    return src('app/js/script.js',{sourcemaps:true})
    .pipe(terser())
    .pipe(dest('dist',{sourcemaps:'.'}))
}

//browsersync tasks
function browsersyncServe(cb){
    browsersync.init({
        server:{
            baseDir:'.'
        }
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

//watch task
function watchTask(){
    watch('*.html',browsersyncReload);
    watch(['app/scss/**/*.scss','app/js/**/*.js'],series(scssTask,jsTask,browsersyncReload));
}
//default gulp task

exports.default=series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);
