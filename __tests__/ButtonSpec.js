import test from 'blue-tape';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import jsdomify from 'jsdomify';
import Button from '../src/Button';

const before = test;
const after = test;

const setup = () => {
	const button = TestUtils.renderIntoDocument(<Button>Homer Button</Button>);
	const submitButton = TestUtils.renderIntoDocument(<Button type="submit">Homer Button</Button>);
	const clickButton = TestUtils.renderIntoDocument(
		<Button onClick={() => 'Bart Simpson'} >Homer Button</Button>);

	const fixtures = { button, submitButton, clickButton };

	return { ...fixtures };
};

const teardown = (fixtures) => {
  // Dispose of your fixtures here.
};

before('create dom instance', (assert) => {
	jsdomify.create();

	assert.end();
});

test('button definition', (assert) => {
	const { button } = setup();
	assert.ok(button, 'should be defined');

	assert.end();
});

test('button component', (assert) => {
	const { button } = setup();
	assert.ok(TestUtils.isCompositeComponent(button), 'should be a valid react component');

	assert.end();
});

test('button type', (assert) => {
	const { button, submitButton } = setup();
	assert.equal(ReactDOM.findDOMNode(button).getAttribute('type'), 'button',
		'should have a default button type');

	assert.equal(ReactDOM.findDOMNode(submitButton).getAttribute('type'), 'submit',
		'should have a valid button type when set');

	assert.end();
});

test('should have an onClick callback', (assert) => {
	const { clickButton } = setup();
	TestUtils.Simulate.click(ReactDOM.findDOMNode(clickButton));

	assert.end();
});

after('destroy dom', (assert) => {
    ReactDOM.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';

    jsdomify.destroy();

    assert.end();
});
