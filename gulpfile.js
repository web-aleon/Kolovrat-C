var gulp = require('gulp'),
	babel = require('gulp-babel');
	concatCSS = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	less = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
	gulp.src('sass/*.scss')
		.pipe(less())
		.pipe(concatCSS('style.css'))
		.pipe(autoprefixer('last 5 version'))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});



gulp.task('babel', function() {
	gulp.src('./dev/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
  var files = [
    '*.html',
    '/css/*.css',
    'img/**/*.png',
    '/js/**/*.js'
  ];
  
  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', function() {

	gulp.watch('sass/*.scss', ['sass']);

	gulp.watch("./dev/js/**/*.js", function(event){
			gulp.run('babel');
		});

});

gulp.task('default', ['sass', 'babel', 'browser-sync', 'watch']);