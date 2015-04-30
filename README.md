gulp-angularJs-boilerplate
============================

A boilerplate using AngularJS, SASS, Gulp, Karma & Jasmin for unit test and Gulp.

---

### Start

1. Clone this repo from `https://github.com/omezzine/gulp-angularJs-boilerplate.git`
2. Run `npm install` from the root directory (Yeah you must have nodejs installed)
3. Run `bower install` from the root directory (may require installing Bower globally `npm install bower -g` )
4. Run `gulp default` or just `gulp` (may require installing Gulp globally `npm install gulp -g`)
5. navigate to 127.0.0.1:8080 (can be changed from gulpfile.js)
6. To prepare assets for production, run the `gulp dist` task (Simply use `gulp default` or just `gulp`  during development.)

Now that `gulp default` is running, the server is up as well and serving files from the `/app` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

### Run Unit/e2e Test

1. To run the unit test type `karma start` from the root direcotry (may required installing karma-cli globally `npm install karma-cli -g`)
2. for e2e tests we are using protractor from angularjs (you can find here everything about how to install `http://angular.github.io/protractor/#/`) then Run 'protractor protractor.conf.js' from the root directory

---

This boilerplate uses the latest versions of the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)
- [Karma](http://karma-runner.github.io/0.12/index.html)
