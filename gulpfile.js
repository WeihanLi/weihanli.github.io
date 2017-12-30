var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require("gulp-cssmin");
var rename = require('gulp-rename');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

var paths = {
    lesspath:'./less/**.less',
    cssdir:'./css/',
    csspath: './css/**.css',
    jspath: './js/**.js',
    destdir:'./dest/',
    destcsspath:'./dest/style.min.css',
    destjspath:'./dest/app.min.js'
};

//less
gulp.task('less', function () {
    gulp.src(paths.lesspath)
        .pipe(concat(paths.destcsspath))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest("."))
});
//js
gulp.task('min:js',function(){
    gulp.src(paths.jspath)
        .pipe(concat(paths.destjspath))
        .pipe(uglify())
        .pipe(gulp.dest("."))
});
gulp.task('default', ['less','min:js']);
