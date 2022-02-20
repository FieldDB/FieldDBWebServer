var gulp = require('gulp');
var RevAll = require("gulp-rev-all");

$ = require('gulp-load-plugins')({
  camelize: true
});

gulp.task('css', function() {
  return gulp.src('app/components/App/app.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      // browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./dist'))
})

gulp.task('css:watch', gulp.series(['css'], function() {
  gulp.watch('app/**/*.scss', ['css'])
}))

gulp.task('moveAssets', function() {
  return gulp.src('./app/assets/**/*')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('build:revAssets', gulp.series(['css', 'moveAssets'], function() {
  // var rev = new $.revAll()
  return gulp.src('./dist/**/*')
    .pipe(RevAll.revision())
    .pipe(gulp.dest('./dist/public'))
    .pipe(RevAll.manifestFile())
    .pipe(gulp.dest('./dist'))
}))

gulp.task('build:cpServer', function() {
  return gulp.src('./app/**/*.{js,jsx,ejs}')
    .pipe(gulp.dest('./dist/server-build'))
})
gulp.task('build:revServer', gulp.series(['build:cpServer'], function() {
  var manifest = gulp.src('./dist/rev-manifest.json')
  return gulp.src('./dist/server-build/{components,containers}/**/*')
    .pipe($.revReplace({
      manifest: manifest
    }))
    .pipe(gulp.dest('./dist/server-build'))
}))

gulp.task('build', gulp.series('build:revAssets', 'build:revServer', function (done) {
    done();
}));
