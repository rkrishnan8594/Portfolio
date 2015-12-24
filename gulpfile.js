var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      open: true
    }));
});

gulp.task('sass', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/templates/*.hbs', ['templates']);
});

gulp.task('scripts', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
    './node_modules/handlebars/dist/handlebars.runtime.js',
    './src/js/templates.js',
    './src/js/*.js'
    ])
    .pipe(concat('site.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('templates', function () {
  gulp.src('./src/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Portfolio.templates',
      noRedeclare: true,
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./src/js'));
});

gulp.task('default', ['webserver', 'watch', 'templates', 'sass', 'scripts']);
