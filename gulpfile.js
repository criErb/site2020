var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');

gulp.task('html', function() {
    return gulp.src('dev/views/*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
  .pipe(gulp.dest('prod/'))
  .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('dev/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('prod/css/'))
    .pipe(browserSync.stream());
});

gulp.task('script', function() {
    return gulp.src('dev/js/*.js')
    .pipe(gulp.dest('prod/js/'))
    .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src('dev/img/**')
    .pipe(gulp.dest('prod/img/'));
});

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server:  "./prod"
    });

    gulp.watch('dev/scss/*.scss', gulp.series('sass'));
    gulp.watch('dev/**/*.html', gulp.series('html'));
    gulp.watch('dev/img/**', gulp.series('images'));
    gulp.watch('dev/js/*.js', gulp.series('script'));
});

gulp.task('default', gulp.series(['html','sass','images','serve','script']));
