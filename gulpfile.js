var {src, series, parallel, dest, watch} = require ('gulp');
var newer = require('gulp-newer');

var gulp = require('gulp'),  
    pug = require('gulp-pug'), // from pug to html 
    livereload = require('gulp-livereload'), //servers ,live reload 
    htmlmin = require('gulp-htmlmin'); // minify HTML.

    //css
var sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');




function htmlTask() {
    return src('stage/html/**/*.pug')
     .pipe(pug({pretty:true}))
     .pipe(htmlmin())
     .pipe(dest('dist/'))
     .pipe(livereload());
  }

  
function Mycss() {
    return src(["stage/css/**/*.css","stage/css/**/*.scss" ])
     .pipe(sourcemaps.init())
     .pipe(sass({outputStyle:'compressed'}).on ('error',sass.logError))
     .pipe(autoprefixer())
     .pipe(concat('main.css'))
     .pipe(sourcemaps.write('.'))
     .pipe(dest('dist/css'))
     .pipe(livereload());
  }

  function Myjs() {
    return src("stage/js/*.js")
     .pipe(concat('main.js'))
     .pipe(minify())
     .pipe(dest('dist/js'))
     .pipe(livereload());
  }

  
  exports.default = function(){
      require("./server.js");
      livereload.listen();
// هل احدد اسم الصفحه الرئىسيه او الكل ؟؟؟
       gulp.watch('stage/html/**/*.pug', parallel(htmlTask));
       gulp.watch(["stage/css/**/*.css","stage/css/**/*.scss"], parallel( Mycss));
       gulp.watch(['stage/js/*.js'], parallel( Myjs));

  }; 