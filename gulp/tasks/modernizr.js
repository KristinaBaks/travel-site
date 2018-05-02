var gulp = require('gulp');
    modernizr = require('gulp-modernizr');

//tests the browser support for certain features on the fly
//when imported and run 'gulp modernizr' inspect > elements > <html class = "svg">

gulp.task('modernizr', function() {
    return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});