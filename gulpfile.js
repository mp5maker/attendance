// All the Gulp Modules
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const concatcss = require('gulp-concat-css');


gulp.task('default', ['sass', 'js', 'libraryjs', 'librarycss'], function(){});

// Convert Sass Files to CSS
gulp.task('sass', function(){
    gulp.src('app/sass/bootstrap.scss')
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'));
});

// Minify and Concat all the JS Files
gulp.task('js', function(){
    gulp.src(['app/**/*.js', 'app/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets'));
});


// All the JavaScript Libraries
var librariesjs = [
    //Angular Apps
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.js',
    'node_modeles/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/angular-messages/angular-messages.min.js',
    
    // jQuery Apps
    'node_modules/jquery/jquery.min.js',
    
    // Popper JS
    'node_modules/popper.js/dist/umd/popper.min.js',
];

// Concat and Minify all the Javascript Libraries
gulp.task('libraryjs', function(){
    gulp.src(librariesjs)
    .pipe(concat('libraries.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets'));
});

// All the CSS Libraries
var librariescss = [
    'node_modules/font-awesome/css/font-awesome.css',
];

// Concat and Minify all the CSS Libraries
gulp.task('librarycss', function(){
    gulp.src(librariescss)
    .pipe(concat('libraries.css'))
    .pipe(gulp.dest('assets'));
});

// Watch all the changes
gulp.task('watch', ['sass', 'js'], function(){
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/sass/**/*.scss', ['sass']);
});