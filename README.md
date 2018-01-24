# Deploy task

[![Greenkeeper badge](https://badges.greenkeeper.io/superflycss/task-deploy.svg)](https://greenkeeper.io/)

[Gulp](http://gulpjs.com/) [PostCSS](http://postcss.org/) deploy task for [superflycss](https://github.com/superflycss) modules.  The primary purpose of running this task is
to remove css not used in test `src/main/html` and `src/test/html` files in order to make deployed content load faster (Some of the CSS modules are quite large).  The deploy task uses the [pli - project layout instance](https://github.com/superflycss/pli) and deploys css files in `src/main/css` and `src/test/css` to `deploy/main/css` and `deploy/test/css` correspondingly.  The primary purpose of doing this is to remove css that is not used in the `target/main/html` and `target/test/html` files.  See the [Deploy Task PostCSS Plugins](https://github.com/superflycss/deploy-build#plugins) list for a list of plugins currently supported.

## Installation

See [Installation](https://github.com/superflycss/superflycss/#installation).

## Usage

See [Usage](https://github.com/superflycss/superflycss/#usage)

## Plugins

| Plugin Name                  | Plugin URL                                             |
|:-----------------------------|:-------------------------------------------------------|
| autoprefixer                 | https://github.com/postcss/autoprefixer                |
| postcss-import               | https://github.com/postcss/postcss-import              |
| postcss-apply                | https://github.com/pascalduez/postcss-apply            |
| postcss-calc                 | https://github.com/postcss/postcss-calc                |
| postcss-color-function       | https://github.com/postcss/postcss-color-function      |
| postcss-custom-media         | https://github.com/postcss/postcss-custom-media        |
| postcss-custom-properties    | https://github.com/postcss/postcss-custom-properties   |
| postcss-each                 | https://github.com/outpunk/postcss-each                |
| postcss-font-magician        | https://github.com/jonathantneal/postcss-font-magician |
| postcss-for                  | https://github.com/antyakushev/postcss-for             |
| postcss-reporter             | https://github.com/postcss/postcss-reporter            |
| postcss-sass-color-functions | https://github.com/adam-h/postcss-sass-color-functions |
| postcss-sass-color-functions | https://github.com/adam-h/postcss-sass-color-functions |
| gulp-uncss                   | https://github.com/ben-eb/gulp-uncss                   |
