gulp-angularJs-boilerplate
============================

A boilerplate using AngularJS, SASS, Gulp, Karma & Jasmin for unit test and Gulp.

---

This boilerplate uses the latest versions of the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)

---

### Start

1. Clone this repo from `https://github.com/omezzine/gulp-angularJs-boilerplate.git`
2. Run `npm install` from the root directory
3. Run `gulp` default task (may require installing Gulp globally `npm install gulp -g`)
4. navigate to 127.0.0.1:8080 (can be changed from gulpfile.js)
5. for the unit test run 'karma start' (may require installing karma-cli 'npm install karma-cli -g')
5. To prepare assets for production, run the `gulp dist` task (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp default` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

