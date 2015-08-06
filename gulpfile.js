var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

//SETUP GULP TASK, YOU CAN NAME IT ANYTHING
gulp.task('styles', function() {
	//Return our transformed file
	//We use the gulp.src method to 
	//tell gulp what files to look at. This is a string;
	//that is a path that's relative to gulpfile.js
	return gulp.src('styles/*.scss')
		//We use the pipe method to keep pushing data along
		// gulp.src will return our scss and .pipe will push
		//it into another function - this case into sass
		.pipe(sass().on('error', sass.logError))
		//the sass function, return us the coverted scss 
		//we use concat to create a file for it to go into
		.pipe(concat('style.css'))
		//concat  will return said file and we use 
		//gupl.dest to tell gulp where to put it
		.pipe(gulp.dest('styles/'))
});



gulp.task('watch', function() {
	gulp.watch('styles/*.scss', ['styles']);
	gulp.watch('js/*.js', ['jshint']);
});

gulp.task('jshint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', ['watch']);