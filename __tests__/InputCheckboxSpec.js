import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import InputCheckbox from '../src/InputCheckbox';
import { suite, t, statelessComponent } from './helpers';

// const before = test;
// const after = test;

let fixtures = null;

const setup = (p = {}) => {
	const props = {
		checked: false,
		handleFocus: () => {},
		handleBlur: () => {},
		handleChange: () => {},
		style: {},
		baseStyles: {},
		...p
	};

	const input = statelessComponent(
		<InputCheckbox { ...props } />
	);

	fixtures = { input };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('InputCheckbox', () => {

	t('InputCheckbox definition', (assert) => {
		const { input } = setup();
		assert.ok(input.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
