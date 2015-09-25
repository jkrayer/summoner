'use strict';

var gulp = require('gulp');
var gulpReact = require('gulp-react');
var jshint = require('gulp-jshint');

gulp.task('reactify', function() {
  gulp.src('./src/js/**/*')
    .pipe(gulpReact())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('reactify:watch', function () {
  gulp.watch('./src/js/**/*', ['sass']);
});
