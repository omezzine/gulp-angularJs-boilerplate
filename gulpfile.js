'use strict';

var gulp = require('gulp'),
       $  = require('gulp-load-plugins')();
 
// Setup Paths
var path = {

	dist: './dist/',

	sass: './app/styles/sass/**/*.scss',

	css: {
		directory: './app/styles/css',
		files: './app/styles/css/**/*.css'
	},

	scripts: ['./app/js/app.js', 'app/js/**/*.js'],

	templates: {
		src: './app/templates/**/*.html',
		dest: './dist/templates/'
	},

	images: {
		src: './app/images/**',
		dest: './dist/images/'
	},

	fonts: {
		src: './app/fonts/**',
		dest: './dist/fonts/'
	}

};

// Setup The Server
gulp.task('connect', function() {
  $.connect.server({
    root: './app',
    livereload: true
  });
});

// Sass To CSS
gulp.task('styles', function(){
	console.log('test');
	return	gulp.src(path.sass)
			.pipe($.sass({onError: function(e) { console.log(e); } }))
			.pipe($.autoprefixer("last 2 versions", "> 1%", "ie 8"))
			.pipe(gulp.dest(path.css.directory))
			.pipe($.connect.reload());
});

// JSHint task
gulp.task('lint', function() {
  gulp.src(path.scripts)
  .pipe($.jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe($.jshint.reporter('default'));
});

// Usemin Task
gulp.task('usemin', function () {
  return gulp.src('app/index.html')
      .pipe($.usemin({
        css: [$.minifyCss(), 'concat'],
        vendor: [$.uglify(), $.rev()],
        js: [$.sourcemaps.init(), $.uglify(), $.rev(), $.sourcemaps.write('./')]
      }))
      .pipe(gulp.dest(path.dist));
});

// Clean The Dist folter
gulp.task('clean-dist', function(cb){
	$.rimraf('./dist', cb);
});

// Copy templates to dist
gulp.task('copyTpls', function(){
	return gulp.src(path.templates.src)
		.pipe($.minifyHtml())
	    .pipe(gulp.dest(path.templates.dest));
});

// Copy images to dist
gulp.task('copyImgs', function(){
	return gulp.src(path.images.src, { read: false })
	    .pipe(gulp.dest(path.images.dest));
});

// Copy fonts to dist
gulp.task('copyFonts', function(){
	return gulp.src(path.fonts.src, { read: false })
	    .pipe(gulp.dest(path.fonts.dest));
});

// Setup The Watchers
gulp.task('watch', function(){
	// SASS Watcher
	gulp.watch(path.sass, ['styles']);
	// JavaScript Watcher
	gulp.watch(path.scripts, ['lint']);
});

gulp.task('default', ['connect', 'watch']);
gulp.task('dist', ['clean-dist', 'usemin', 'copyTpls', 'copyImgs', 'copyFonts']);