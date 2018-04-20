var gulp = require('gulp');
var concat = require("gulp-concat");
var less = require('gulp-less');
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");

var paths = {
    lesspath:'./less/**.less',
    cssdir:'./css/',
    csspath: './css/**.css',
    jspath: './js/**.js',
    destdir:'./dist/',
    destcsspath:'./dist/style.min.css',
    destjspath:'./dist/app.min.js'
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
// default
gulp.task('default', ['less','min:js']);