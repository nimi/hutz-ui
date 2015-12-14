import test from 'blue-tape';
import React from 'react';
import ReactDOM from 'react-dom';
import jsdomify from 'jsdomify';
import TestUtils from 'react-addons-test-utils';
import InputCheckbox from '../src/InputCheckbox';

const before = test;
const after = test;

const setup = () => {
	const input = TestUtils.renderIntoDocument(<InputCheckbox />);

	const fixtures = { input };

	return { ...fixtures };
};

const teardown = (fixtures) => {
  // Dispose of your fixtures here.
};

before('create dom instance', (assert) => {
	jsdomify.create();

	assert.end();
});

test('input checkbox definition', (assert) => {
	const { input } = setup();
	assert.ok(input, 'should be defined');

	assert.end();
});

test('input checkbox component', (assert) => {
	const { input } = setup();
	assert.ok(TestUtils.isCompositeComponent(input), 'should be a valid react component');

	assert.end();
});
