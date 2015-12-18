import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Box from '../src/Box';
import { suite, t, statelessComponent } from './helpers';

const baseStyles = {
	alignSelf: null,
	boxSizing: 'border-box',
	flex: null,
	flexBasis: '100%',
	height: null,
	padding: null,
	paddingBottom: null,
	paddingLeft: null,
	paddingRight: null,
	paddingTop: null,
	width: '100%'
};

let fixtures = {};

const setup = (name = 'box', p = {}) => {
	const props = {
		...p
	};

	const box = statelessComponent(
		<Box { ...props } />
	);

	fixtures[name] = box;

	return { ...fixtures };
};

const teardown = () => {
	fixtures = {};
};

suite('Box Component', () => {

	t('definition', (assert) => {
		const { box } = setup();
		assert.ok(box.instance, 'should be defined');

		teardown();
		assert.end();
	});

	t('default styles', (assert) => {
		const { box } = setup();
		const style = { ...baseStyles };

		assert.deepEqual(box.style, style, 'should have no style by default');

		teardown();
		assert.end();
	});

});
