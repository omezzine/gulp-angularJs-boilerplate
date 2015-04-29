'use strict';

var gulp = require('gulp'),
       $  = require('gulp-load-plugins')();
 
// Setup Paths
var path = {
	sass: 'app/sass/**/*.scss',
	css: {
		directory: 'app/assets/css',
		files: 'app/assets/**/*.css'
	},
	scripts: ['app/app.js', 'app/scripts/**/*.js'],
	templates: 'app/templates/**/*.html '
};

// Setup The Server
gulp.task('connect', function() {
  $.connect.server({
    root: 'app',
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
        //html: [$.minifyHtml({empty: true})],
        js: [$.uglify(), $.rev()]
      }))
      .pipe(gulp.dest('dist/'));
});

// Setup The Watchers
gulp.task('watch', function(){
	// SASS Watcher
	gulp.watch(path.sass, ['styles']);
	// JavaScript Watcher
	//gulp.watch(path.scripts, ['lint']);
});

gulp.task('default', ['connect', 'watch']);
gulp.task('dist', ['lint', 'usemin']);