import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import FlexBox from '../src/FlexBox';
import { suite, t, statelessComponent } from './helpers';

const __ = undefined;

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

	t('flex direction column', (assert) => {
		const { flexBox } = setup(__, { direction: 'column' });
		const style = { ...baseStyles, flexDirection: 'column' };

		assert.deepEqual(flexBox.style, style, 'should set flex direction to column');

		teardown();
		assert.end();
	});

	t('flex direction column-reverse', (assert) => {
		const { flexBox } = setup(__, { direction: 'column-reverse' });
		const style = { ...baseStyles, flexDirection: 'column-reverse' };

		assert.deepEqual(flexBox.style, style, 'should set flex direction to column-reverse');

		teardown();
		assert.end();
	});

	t('flex direction row-reverse', (assert) => {
		const { flexBox } = setup(__, { direction: 'row-reverse' });
		const style = { ...baseStyles, flexDirection: 'row-reverse' };

		assert.deepEqual(flexBox.style, style, 'should set flex direction to row-reverse');

		teardown();
		assert.end();
	});

	t('flex direction row-reverse', (assert) => {
		const { flexBox } = setup(__, { direction: 'row-reverse' });
		const style = { ...baseStyles, flexDirection: 'row-reverse' };

		assert.deepEqual(flexBox.style, style, 'should set flex direction to row-reverse');

		teardown();
		assert.end();
	});


	t('flex align', (assert) => {
		const { flexBox } = setup(__, { align: 'stretch' });
		const style = { ...baseStyles, alignItems: 'stretch' };

		assert.deepEqual(flexBox.style, style, 'should set item alignment to stretch');

		teardown();
		assert.end();
	});
});
