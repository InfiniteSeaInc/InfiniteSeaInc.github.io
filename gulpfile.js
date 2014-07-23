var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');

gulp.task('default', function() {

  gulp.src('./css/*.css')
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./css/'));

});
