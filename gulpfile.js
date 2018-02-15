var gulp =require('gulp'),
    watch = require('gulp-watch')
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvar = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');

gulp.task('default',function () {
	console.log('Task created');
});

gulp.task('html',function () {	
	console.log('Html task executed');
});

gulp.task('styles',function () {	
	//console.log('Styles task executed');
	
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvar, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));	
	console.log('Styles task executed 2');		
});

gulp.task('watch',function () {	
	
	watch('./app/index.html', function() {
		gulp.start('html');
	});
	
	watch('./app/assets/**/*.css', function() {
		gulp.start('styles');
	});
	
	
});