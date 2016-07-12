var gulp          = require('gulp');

var browserSync   = require('browser-sync');
var watch         = require('gulp-watch');

var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');

var autoprefixer  = require('autoprefixer');

var cssmin        = require('gulp-cssmin');
var rename        = require('gulp-rename');

var path          = require('path');


//default task
gulp.task('default', ['Watch']);

// css task's
gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('autoPrefixer', function(){
  gulp.src('css/styles.css')
  .pipe( postcss([
      autoprefixer({ browsers: ['last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'] })
  ]))
  .pipe(gulp.dest('css'));
});

gulp.task('cssMin', function () {
    gulp.src('css/styles.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

//watch task & browser-sync
gulp.task('sass-watch', ['sass'], function(){
    setTimeout(function() {
        browserSync.reload;
    }, 200);
});
gulp.task('Watch', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./*html', browserSync.reload);
  gulp.watch('css/*.css');
  gulp.watch('sass/*.scss', ['sass-watch']);
});

