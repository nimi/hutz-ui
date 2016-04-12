'use strict';

var gulp = require('gulp');
var initReactComponentTasks = require('./tasks');
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
		name: 'index',
		dependencies: [
			'react'
		],
		src: 'src',
		dist: 'dist'
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
