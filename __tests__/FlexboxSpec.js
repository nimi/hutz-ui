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
	minHeight: 0,
	height: 'auto',
	justifyContent: null,
	marginLeft: null,
	marginRight: null,
	width: null
};

let fixtures = {};

const setup = (name = 'flexBox', p = {}) => {
	const props = {
		...p
	};

	const scale = [0, 8, 16, 32, 64];

	const flexBox = statelessComponent(
		<FlexBox { ...props } />
	);

	fixtures[name] = flexBox;
	fixtures.scale = scale;

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

	t('flex gutter', (assert) => {
		const { flexBox, scale } = setup(__, { gutter: 1 });
		const style = { ...baseStyles, marginLeft: -scale[1], marginRight: -scale[1] };

		assert.deepEqual(flexBox.style, style, 'should set margin left and right based on scale');

		teardown();
		assert.end();
	});

	t('flex justify', (assert) => {
		const { flexBox } = setup(__, { justify: 'center' });
		const style = { ...baseStyles, justifyContent: 'center' };

		assert.deepEqual(flexBox.style, style, 'should set justify-content to center');

		teardown();
		assert.end();
	});

	t('flex justify', (assert) => {
		const { flexBox } = setup(__, { justify: 'center' });
		const style = { ...baseStyles, justifyContent: 'center' };

		assert.deepEqual(flexBox.style, style, 'should set justify content to center');

		teardown();
		assert.end();
	});

	t('flex wrap', (assert) => {
		const { flexBox } = setup(__, { wrap: true });
		const style = { ...baseStyles, flexWrap: 'wrap' };

		assert.deepEqual(flexBox.style, style, 'should set flex-wrap value when wrap true');

		teardown();
		assert.end();
	});
});
