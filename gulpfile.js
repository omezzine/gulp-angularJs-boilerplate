'use strict';

var gulp = require('gulp'),
       $  = require('gulp-load-plugins')();
 
// Setup Paths
var path = {
	dist: './dist/',
	sass: 'app/sass/**/*.scss',
	css: {
		directory: 'app/assets/css',
		files: 'app/assets/**/*.css'
	},
	scripts: ['app/js/app.js', 'app/js/**/*.js'],
	templates: {
		src: 'app/templates/**/*.html',
		dest: this.dist+'templates/'
	}
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
      .pipe(gulp.dest(path.dist));
});

// Clean The Dist folter
gulp.task('clean-dist', function(){
	return gulp.src(path.dist+'**', { read: false }) // much faster
	    .pipe($.rimraf());
});

// Copy templates to dist
gulp.task('copyTpl', function(){
	return gulp.src(path.templates.src)
		.pipe($.minifyHtml())
	    .pipe(gulp.dest(path.templates.dest));
});

// Setup The Watchers
gulp.task('watch', function(){
	// SASS Watcher
	gulp.watch(path.sass, ['styles']);
	// JavaScript Watcher
	//gulp.watch(path.scripts, ['lint']);
});

gulp.task('default', ['connect', 'watch']);
gulp.task('dist', ['lint', 'clean-dist', 'usemin', 'copyTpl']);