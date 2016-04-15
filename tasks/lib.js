var babel = require('gulp-babel');
var del = require('del');

module.exports = function (gulp, config) {
	gulp.task('clean:lib', function () {
		return del([config.component.lib]);
	});

	gulp.task('build:lib', function () {
		return gulp.src([ config.component.src + '/**/*.js', '!**/__tests__/**/*' ])
			.pipe(babel({ plugins: [require('babel-plugin-object-assign')] }))
			.pipe(gulp.dest(config.component.lib));

		// standalone.transform(babelify.configure({
		//			presets: ['es2015', 'stage-0', 'react'],
		//			plugins: ['transform-react-display-name', 'transform-decorators']
		//		}))
	});

	gulp.task('watch:lib', ['build:lib'], function () {
		return gulp.watch([config.component.src + '/**/*.js', '!**/__tests__/**/*'], ['build:lib']);
	});
};