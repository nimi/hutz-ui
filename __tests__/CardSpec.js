import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { suite, t, statelessComponent } from './helpers';
import {Card} from '../src';

let fixtures = null;

const setup = (p = {}) => {
	const props = {
		...p
	};

	const card = statelessComponent(
		<Card { ...props } />
	);

	fixtures = { card };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('Card', () => {

	t('Card definition', (assert) => {
		const { card } = setup();
		assert.ok(card.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
