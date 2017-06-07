"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
// var sourcemaps = require('gulp-sourcemaps');

gulp.task("style", function() {
  gulp.src("less/style.less")
    // .pipe(sourcemaps.init())  
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    // .pipe(sourcemaps.write('css/maps'))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
