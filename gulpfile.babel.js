import gulp       from 'gulp'
import del        from 'del'
import htmlmin    from 'gulp-htmlmin'
import imagemin   from 'gulp-imagemin'
import prefix     from 'gulp-autoprefixer'
import sass       from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'

gulp.task('default', ['html', 'styles'])

gulp.task('clean', del.bind(null, ['index.html', 'public/css', 'public/js'], {read: false}))

gulp.task('clean:images', del.bind(null, ['public/images'], {read: false}))

gulp.task('images', ['clean:images'], () => {
  return gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'))
})

gulp.task('html', () => {
  return gulp.src('app/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('styles', () => {
  return gulp.src('app/sass/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'))
})

gulp.task('watch', () => {
  gulp.watch('index.html', ['html'])
  gulp.watch('app/sass/**/*', ['styles'])
})
