import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { suite, t, statelessComponent } from './helpers';
import Select from '../src/Select';

let fixtures = null;

const setup = (p = {}) => {
	const props = {
		name: 'Test Name',
		label: 'Test Label',
		options: [{ name: 'test', val: 'test val'}],
		style: {},
		baseStyles: {},
		...p
	};

	const select = statelessComponent(
		<Select { ...props } />
	);

	fixtures = { select };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('Select', () => {

	t('Select definition', (assert) => {
		const { select } = setup();
		assert.ok(select.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
