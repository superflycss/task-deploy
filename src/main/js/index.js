//==================================================
//  For the description see
//  [SupeflyCSS Test Task](https://github.com/superflycss/task-deploy/)
//==================================================
//  Tasks
//  ---------------------------------------------------
//  deploy:main:css
//  Deploys main css only
//  ---------------------------------------------------
//  deploy:test:css
//  Deploys test css only
//  ---------------------------------------------------
//  deploy:main:html
//  ---------------------------------------------------
//  Deploys main html only
//  Deploys test html only
//  ---------------------------------------------------
//  IMPLEMENTATION
//  ---------------------------------------------------
//  deploy:main:css and deploy:test:css
//  ---------------------------------------------------
//  These tasks rerun all the plugins in configured in
//  superflycss/task-build task.  The reason is that
//  font magician  has to be run after uncss is run.
//  That way only fonts  that are used will have a
//  corresponding @font-face declaration generated.
//
//  Also note that uncss is run against the target Directory
//  containing the built html files.  This is important.  The
//  src directory contains unbuilt html files and these will
//  not have all the css classes rendered, which would result in
//  uncss not seeing them.
//
//  ---------------------------------------------------
//  deploy:main:html and deploy:test:html
//  ---------------------------------------------------
//==================================================

var gulp = require('gulp');
var pc = require('gulp-postcss');
var pc_import = require('postcss-import');
var pc_calc = require('postcss-calc');
var pc_custom_properties = require('postcss-custom-properties');
var pc_color_function = require('postcss-color-function');
var pc_sass_color_functions = require("postcss-sass-color-functions");
var pc_each = require('postcss-each');
var pc_for = require('postcss-for');
var pc_apply = require('postcss-apply');
var pc_reporter = require('postcss-reporter');
var pc_custom_media = require('postcss-custom-media');
var pc_font_magician = require('postcss-font-magician');
var pc_uncss = require('postcss-uncss');

var cleancss = require('gulp-clean-css');
var autoprefixer = require('autoprefixer');

var PLI = require('@superflycss/pli');

var uncss_main_processors = [pc_import, pc_each, pc_for, pc_custom_properties, pc_apply, pc_calc, pc_color_function, pc_sass_color_functions, pc_custom_media, pc_font_magician, autoprefixer, pc_uncss({html: [PLI.TARGET_MAIN_HTML]}), pc_reporter({
  clearMessages: true
})];

var uncss_test_processors = [pc_import, pc_each, pc_for, pc_custom_properties, pc_apply, pc_calc, pc_color_function, pc_sass_color_functions, pc_custom_media, pc_font_magician, autoprefixer, pc_uncss({html: [PLI.TARGET_TEST_HTML]}), pc_reporter({
  clearMessages: true
})];

/*
 * IMPLEMENTATION
 * ================================================
 * Note that CSS is rebuilt from scratch since
 * UNCSS has to be run before font magician
 * ================================================
 */
gulp.task('deploy:main:css', function() {
  return gulp.src(PLI.SRC_MAIN_CSS)
    .pipe(pc(uncss_main_processors))
    .pipe(cleancss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(PLI.deploy.main.css));
});

gulp.task('deploy:test:css', function() {
  return gulp.src(PLI.SRC_TEST_CSS)
    .pipe(pc(uncss_test_processors))
    .pipe(cleancss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(PLI.deploy.test.css));
});

gulp.task('deploy:main:html', function() {
  return gulp
    .src(PLI.TARGET_MAIN_HTML)
    .pipe(gulp.dest(PLI.deploy.main.html));
});

gulp.task('deploy:test:html', function() {
  return gulp
    .src(PLI.TARGET_TEST_HTML)
    .pipe(gulp.dest(PLI.deploy.test.html));
});
