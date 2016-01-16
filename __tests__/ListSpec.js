import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { suite, t, statelessComponent } from './helpers';
import List from '../src/List';

let fixtures = null;

const setup = (p = {}) => {
	const props = {
		...p
	};


	const list = statelessComponent(
		<List { ...props } />
	);

	fixtures = { list };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('List', () => {

	t('List definition', (assert) => {
		const { list } = setup();
		assert.ok(list.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
