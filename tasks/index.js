var defaults = require('defaults');
var capitalize = require('capitalize');
var camelCase = require('camelcase');

// Extract package.json metadata
function readPackageJSON () {
	var pkg = JSON.parse(require('fs').readFileSync('./package.json'));
	var dependencies = pkg.dependencies ? Object.keys(pkg.dependencies) : [];
	var peerDependencies = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [];

	return {
		name: pkg.name,
		deps: dependencies.concat(peerDependencies),
		aliasify: pkg.aliasify
	};
}

/**
 * This package exports a function that binds tasks to a gulp instance
 * based on the provided config.
 */
function initTasks (gulp, config) {
	var pkg = readPackageJSON();
	var name = capitalize(camelCase(config.component.pkgName || pkg.name));

	config = defaults(config, { aliasify: pkg.aliasify });
	config.component = defaults(config.component, {
		pkgName: pkg.name,
		dependencies: pkg.deps,
		name: name,
		src: 'src',
		lib: 'lib',
		dist: 'dist',
		file: (config.component.name || name) + '.js'
	});

	if (config.example) {
		if (config.example === true) config.example = {};

		defaults(config.example, {
			src: 'example/src',
			dist: 'example/dist',
			files: ['index.html'],
			scripts: ['example.js'],
			less: ['example.less']
		});
	}

	require('./bump')(gulp, config);
	require('./dev')(gulp, config);

	var buildTasks = [];
	var cleanTasks = [];

	if (config.component.lib) {
		require('./lib')(gulp, config);
		buildTasks.push('build:lib');
		cleanTasks.push('clean:lib');
	}

	if (config.example) {
		require('./examples')(gulp, config);
		buildTasks.push('build:examples');
		cleanTasks.push('clean:examples');
	}

	gulp.task('build', buildTasks);
	gulp.task('clean', cleanTasks);
}

module.exports = initTasks;
module.exports.readPackageJSON = readPackageJSON;
