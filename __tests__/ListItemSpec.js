import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { suite, t, statelessComponent } from './helpers';
import ListItem from '../src/ListItem';

let fixtures = null;

const setup = (p = {}) => {
	const props = {
		...p
	};


	const listItem = statelessComponent(
		<ListItem { ...props } />
	);

	fixtures = { listItem };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('ListItem', () => {

	t('ListItem definition', (assert) => {
		const { listItem } = setup();
		assert.ok(listItem.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
