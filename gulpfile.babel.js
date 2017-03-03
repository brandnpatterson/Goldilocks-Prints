import gulp       from 'gulp';
import prefix     from 'gulp-autoprefixer';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('default', ['styles']);

gulp.task('styles', () => {
  return gulp.src('styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public'))
});
