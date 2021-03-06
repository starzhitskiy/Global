'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-html-minifier-terser');
const webpack = require('webpack-stream');

const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const del = require('del');



sass.compiler = require('node-sass');

// Check for --production flag
let isDev = !(argv.production);

function buildStyles() {
   return gulp.src('./src/scss/style.scss')
      .pipe( 
         gulpif(isDev, sourcemaps.init() )         
      )
      .pipe(sass({outputStyle: isDev ? 'nested' : 'compressed'}).on('error', sass.logError))
      .pipe( 
         gulpif(isDev, sourcemaps.write('./') )       
      )     
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream())
}
gulp.task('styles', buildStyles);

function buildHtml() {
	return gulp.src('./src/**/*.html')
		.pipe(
			gulpif(!isDev, htmlmin({ collapseWhitespace: true }) )
		)
		.pipe(gulp.dest('./build/'))
		.pipe(browserSync.stream())
}

gulp.task('html', buildHtml);



let webPackConfig = {
	output: {
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},

	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'eval-source-map' : 'none',
}

function buildScripts() {
	return gulp.src('./src/js/main.js')
		.pipe(webpack(webPackConfig))
		.pipe(gulp.dest('./build/js/'))
		.pipe(browserSync.stream());
}
gulp.task('scripts', buildScripts);
function buildImg() {
	return gulp.src('./src/img/**/*.*')
		.pipe(gulp.dest('./build/img'))
		.pipe(browserSync.stream());
}
gulp.task('images', buildImg);
//Production
function buildProdStyles() {
	return gulp.src('./scss/style.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream())
}
gulp.task('styles-prod', buildProdStyles);
function watch() {
	browserSync.init({
		server: {
			baseDir: "./build/"
		}
	});
	gulp.watch('./src/js/**/*.js', buildScripts);
	gulp.watch('./src/scss/**/*', buildStyles);
	gulp.watch('./src/img/**/*', buildImg);
	gulp.watch('./src/**/*.html', buildHtml);
}
gulp.task('watch', watch);

function clean() {
	return del(['build/*']);
}

let build = gulp.series(
	clean,
	gulp.parallel(buildHtml, buildStyles, buildImg, buildScripts)
)

gulp.task('build', build);

gulp.task(
	'default',
	gulp.series(
		gulp.parallel(buildHtml, buildStyles, buildImg, buildScripts),
		watch
	)
);