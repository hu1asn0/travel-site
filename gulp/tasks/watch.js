var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

/* DEFINITON OF wathc TASK */
gulp.task('watch', function(){

/* INITALIZE browserSync*/
browserSync.init({
notify: false,
server: {
baseDir: "app"
}
});

/*WATCH index.html CHANGES &RELOAD page*/
watch('./app/index.html', function(){
browserSync.reload();	
});

/* WATCH ALL CSS CHANGES AND INJECT WITH HOTLOAD*/
watch('./app/assets/styles/**/*.css', function(){
gulp.start('cssInject');	
});

/* WATCH ALL JavaScript CHANGES AND RELOAD*/
watch('./app/assets/scripts/**/*.js', function(){
gulp.start('scriptsRefresh');
});

});

/*INJECT styles.css AFTER styles.js RAN*/
gulp.task('cssInject',['styles'], function(){
return gulp.src('./app/temp/styles/styles.css')
.pipe(browserSync.stream());

});

/* RELOAD PAGE AFTER scripts.js RAN*/
gulp.task('scriptsRefresh', ['scripts'], function(){
browserSync.reload();
})