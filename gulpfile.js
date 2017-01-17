var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer  = require('autoprefixer'),
cssvars = require('postcss-simple-vars');

gulp.task('default', function(){
console.log("Hooray - you created a GULP task!");

});

gulp.task('html', function(){
console.log("Imagine something getting done to your HTML");
});

gulp.task('styles', function(){
return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([autoprefixer, cssvars]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
watch('./app/index.html', function(){
gulp.start('html');	
})

watch('./app/assets/styles/**/*.css', function(){
gulp.start('styles');	
});

});