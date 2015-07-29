'use strict';

var gulp = require('gulp');
var jest = require('gulp-jest');
var initReactComponentTasks = require('react-component-gulp-tasks');
var harmonize = require('harmonize');

/**
 * Tasks are added by the react-component-gulp-tasks package
 * 
 * See https://github.com/JedWatson/react-component-gulp-tasks
 * for documentation.
 * 
 * You can also add your own additional gulp tasks if you like.
 */

var taskConfig = {

	component: {
		name: 'Components',
		dependencies: [
			'classnames',
			'react',
			'react/addons'
		],
		lib: 'lib'
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'example.js'
		],
		less: [
			'example.less'
		]
	}

};

initReactComponentTasks(gulp, taskConfig);

// Boyz II Men
harmonize();

gulp.task('jest', function () {
    return gulp.src('__tests__').pipe(jest({
    	verbose: true,
        scriptPreprocessor: "./support/preprocessor.js",
        unmockedModulePathPatterns: [
            "<rootDir>/node_modules/react"
        ],
        testDirectoryName: "__tests__",
        testPathIgnorePatterns: [
            "<rootDir>/node_modules",
            "support"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});

gulp.task('test', function () {
	gulp.watch(['src/**.js','__tests__/*.js'], ['jest'])
});

