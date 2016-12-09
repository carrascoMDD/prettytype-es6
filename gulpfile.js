//...
var gulp = require('gulp');
var babel = require("gulp-babel");
var plumber = require("gulp-plumber");
var Server = require('karma').Server;
var sourceMaps = require( 'gulp-sourcemaps');

var paths = {
    es6: ['./src/es6/**/*.js']
};

gulp.task('default', ['babel']);

gulp.task("babel", function () {
    return gulp.src(paths.es6)
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(sourceMaps.write('.', { sourceRoot: "build/js" }))
        .pipe(gulp.dest("build/js"));
});

//...

gulp.task('watch', function() {
    gulp.watch(paths.es6, ['babel']);
});


gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});


//...