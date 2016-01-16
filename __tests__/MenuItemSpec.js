import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { suite, t, statelessComponent } from './helpers';
import MenuItem from '../src/MenuItem';

let fixtures = null;

const setup = (p = {}) => {
	const props = {
		...p
	};


	const menuItem = statelessComponent(
		<MenuItem { ...props } />
	);

	fixtures = { menuItem };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('MenuItem', () => {

	t('MenuItem definition', (assert) => {
		const { menuItem } = setup();
		assert.ok(menuItem.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
