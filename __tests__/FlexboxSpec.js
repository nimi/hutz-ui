import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import FlexBox from '../src/FlexBox';
import { suite, t, statelessComponent } from './helpers';

const baseStyles = {
	display: 'flex',
    flexWrap: null,
    flexDirection: null,
    alignItems: null,
    height: '100%',
    justifyContent: null,
    marginLeft: null,
    marginRight: null
};

let fixtures = {};

const setup = (name = 'flexBox', p = {}) => {
	const props = {
		...p
	};

	const flexBox = statelessComponent(
		<FlexBox { ...props } />
	);

	fixtures[name] = flexBox;

	return { ...fixtures };
};

const teardown = () => {
	fixtures = {};
};

suite('FlexBox Component', () => {

	t('definition', (assert) => {
		const { flexBox } = setup();
		assert.ok(flexBox.instance, 'should be defined');

		teardown();
		assert.end();
	});

	t('default styles', (assert) => {
		const { flexBox } = setup();
		const style = { ...baseStyles };

		assert.deepEqual(flexBox.style, style, 'should have no style by default');

		teardown();
		assert.end();
	});

});
