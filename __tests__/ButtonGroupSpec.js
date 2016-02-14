import React from 'react';
import { ButtonGroup, Button } from '../src/Components';
import { suite, t, statelessComponent } from './helpers';

const __ = undefined;

const containerStyles = {
	width: 'initial',
	maxWidth: null
};

const buttonStyle = {
	display: 'inline-block',
	marginTop: null,
	marginLeft: 1,
	borderRadius: 'none'
};

let fixtures = {};

const setup = (name = 'buttonGroup', p = {}) => {
	const props = {
		...p
	};

	const buttonGroup = statelessComponent(
		<ButtonGroup { ...props }>
			<Button />
			<Button />
			<Button />
		</ButtonGroup>
	);

	fixtures[name] = buttonGroup;

	return { ...fixtures };
};

const teardown = () => {
	fixtures = {};
};

suite('ButtonGroup Component', () => {

	t('definition', (assert) => {
		const { buttonGroup } = setup();
		assert.ok(buttonGroup.instance, 'should be defined');

		teardown();
		assert.end();
	});

	t('default container styles', (assert) => {
		const { buttonGroup } = setup();
		const style = { ...containerStyles };

		assert.deepEqual(buttonGroup.style, style, 'should have container style by default');

		teardown();
		assert.end();
	});

});
