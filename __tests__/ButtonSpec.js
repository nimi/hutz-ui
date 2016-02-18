import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import { suite, t } from './helpers';
import {Button} from '../src';


const setup = () => {
	const button = TestUtils.renderIntoDocument(<Button>Homer Button</Button>);
	const submitButton = TestUtils.renderIntoDocument(<Button type="submit">Homer Button</Button>);
	const clickButton = TestUtils.renderIntoDocument(
		<Button onClick={() => 'Bart Simpson'} >Homer Button</Button>);

	const fixtures = { button, submitButton, clickButton };

	return { ...fixtures };
};

const teardown = (fixtures) => {
  fixtures = null;
};

suite('Button', () => {

	t('button definition', (assert) => {
		const { button } = setup();
		assert.ok(button, 'should be defined');

		assert.end();
	});

	t('button component', (assert) => {
		const { button } = setup();
		assert.ok(TestUtils.isCompositeComponent(button), 'should be a valid react component');

		assert.end();
	});

	t('button type', (assert) => {
		const { submitButton } = setup();

		assert.equal(ReactDOM.findDOMNode(submitButton).getAttribute('type'), 'submit',
			'should have a valid button type when set');

		assert.end();
	});

	t('should have an onClick callback', (assert) => {
		const { clickButton } = setup();
		TestUtils.Simulate.click(ReactDOM.findDOMNode(clickButton));

		assert.end();
	});

});
