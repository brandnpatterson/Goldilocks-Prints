import del        from 'del'
import gulp       from 'gulp'
import prefix     from 'gulp-autoprefixer'
import sass       from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import sync       from 'browser-sync'
import webpack    from 'webpack-stream'

var reload = sync.reload

gulp.task('clean', del.bind(null, ['public/index.css', 'public/bundle.js.*'], {read: false}))

gulp.task('default', ['scripts', 'server', 'styles', 'watch'])

gulp.task('deploy', ['scripts', 'styles'])

gulp.task('scripts', () => {
  return gulp.src(['src/index.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public'))
})

gulp.task('server', () => {
  sync({
    notify: false,
    server: {
      baseDir: './'
    },
    port: 8888
  })
})

gulp.task('styles', () => {
  return gulp.src('src/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public'))
})

gulp.task('watch', () => {
  gulp.watch('index.html', [reload])
  gulp.watch('src/**/*.js', ['scripts', reload])
  gulp.watch('src/**/**/**/*.sass', ['styles', reload])
})
