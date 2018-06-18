var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var frontMatter = require('gulp-front-matter');
var markdown = require('gulp-markdown');
var layout = require('gulp-layout');
var runSequence = require('run-sequence');

gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('pug', function(){
  return gulp.src(['src/*.pug','!src/layout.pug'])
    .pipe(pug())
    .pipe(gulp.dest('.'))
});

gulp.task('posts', function(){
  return gulp.src(['src/posts/*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('posts'))
});

gulp.task('articles', function(){
  return gulp.src(['src/posts/*.md'])
    .pipe(markdown())
    .pipe(layout({
			bodyClass: 'light article',
			layout: 'src/layout.pug'
		}))
    .pipe(gulp.dest('posts'));
});

gulp.task('scripts', function() {  
	return gulp.src([
		//'src/scripts/jquery-3.0.0.min.js',
		'src/scripts/**/*.js'
	])
  	.pipe(concat('app.min.js'))
  	.pipe(gulp.dest('assets/js'));
});

gulp.task('images', function() {
	return gulp.src('src/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/images'))
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  gulp.watch('src/scripts/*.js', ['scripts']); 
  gulp.watch('src/*.pug', ['pug']); 
  gulp.watch('src/posts/*.pug', ['posts']); 
  gulp.watch('src/posts/*.md', ['articles']); 
	gulp.watch('src/images/**/*', ['images']);
});

gulp.task('default', function (callback) {
  runSequence(['sass','pug','posts','articles','scripts','images','watch'],
    callback
  )
})
