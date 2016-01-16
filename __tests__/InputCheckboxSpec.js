import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import InputCheckbox from '../src/InputCheckbox';
import { suite, t, statelessComponent } from './helpers';

const baseStyles = {
	// boxSizing: 'border-box',
	padding: '5px',
	// width: '100%'
};

const addedStyle = {
	padding: '10px'
};


let fixtures = {};

const setup = (name = 'input', p = {}) => {
	const props = {
		checked: false,

		style: addedStyle,
		baseStyles,
		...p
	};

	const input = statelessComponent(
		<InputCheckbox { ...props } />
	);

	fixtures[name] = input;

	return { ...fixtures };
};

const teardown = () => {
	fixtures = {};
};

suite('InputCheckbox', () => {

	t('definition', (assert) => {
		const { input } = setup();
		assert.ok(input.instance, 'should be defined');

		teardown();
		assert.end();
	});

	t('default styles', (assert) => {
		const { input } = setup();
		const style = { ...baseStyles, ...addedStyle };

		assert.deepEqual(input.style, style, 'should have no style by default');

		teardown();
		assert.end();
	});

	t('checked property', (assert) => {
		const { input } = setup();
		assert.equal(input.vdom.props.checked, false, 'should be unchecked by default');

		const { checkedInput } = setup('checkedInput', { checked: true });
		assert.equal(checkedInput.vdom.props.checked, true, 'should be unchecked by default');

		teardown();
		assert.end();
	});

});
