import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { suite, t, statelessComponent } from './helpers';
import Menu from '../src/Menu';

let fixtures = null;

const setup = (p = {}) => {
	const props = {
		...p
	};


	const menu = statelessComponent(
		<Menu { ...props } />
	);

	fixtures = { menu };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('Menu', () => {

	t('Menu definition', (assert) => {
		const { menu } = setup();
		assert.ok(menu.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
