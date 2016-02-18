import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { suite, t, statelessComponent } from './helpers';
import InputText from '../src/components/Input/InputText';

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
		<InputText { ...props } />
	);

	fixtures = { input };

	return { ...fixtures };
};

const teardown = () => {
	fixtures = null;
};

suite('InputText', () => {

	t('InputText definition', (assert) => {
		const { input } = setup();
		assert.ok(input.instance, 'should be defined');

		teardown();
		assert.end();
	});

});
