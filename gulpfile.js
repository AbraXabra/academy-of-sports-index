var gulp = require('gulp'),
		minCSS = require('gulp-clean-css'),
		sass = require('gulp-sass'),
		imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
		browserSync = require('browser-sync').create(),
    cache = require('gulp-cache'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

// запуск сервера browserSync
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "dev/"
  });

  gulp.watch("dev/static/sass/*.sass", ['sass']);
  gulp.watch("dev/*.html").on('change', browserSync.reload);
  gulp.watch("dev/static/js/*.js").on('change', browserSync.reload);

});

// компилятор sass в css + минификация + автопрефиксы
gulp.task('sass', function() {
  return gulp.src("dev/static/sass/*.sass")
      .pipe(sass())
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest("dev/static/css"))
      .pipe(browserSync.stream());
});

// Оптимизируем и переносим картинки + кэш
gulp.task('img', function(){
	return gulp.src('dev/static/img/**/*')
			.pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      })))
			.pipe(gulp.dest('build/static/img/'));
});

// Удаляем папку build перед сборкой
gulp.task('clean', function() {
  return del.sync('build');
});

// Переносим файлы проекта в продакшен
gulp.task('build', ['clean', 'sass', 'img'], function() {

  var buildCss = gulp.src('dev/static/css/*.css')
  .pipe(minCSS())
  .pipe(gulp.dest('build/static/css'))

  var buildFonts = gulp.src('dev/static/fonts/**/*')
  .pipe(gulp.dest('build/static/fonts'))

  var buildJs = gulp.src('dev/static/js/**/*')
  .pipe(gulp.dest('build/static/js'))

  var buildPlugins = gulp.src('dev/static/plugins/**/*')
  .pipe(gulp.dest('build/static/plugins'))

  var buildHtml = gulp.src('dev/*.html')
  .pipe(gulp.dest('build'));

  var buildHtaccess = gulp.src('dev/.htaccess')
  .pipe(gulp.dest('build'));
  
});

// Чистка кэша
gulp.task('clear', function () {
  return cache.clearAll();
});

gulp.task('default', ['serve']);