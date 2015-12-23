import React from 'react';
import Box from '../src/Box';
import { suite, t, statelessComponent } from './helpers';

const __ = undefined;

const baseStyles = {
	alignSelf: null,
	boxSizing: 'border-box',
	flex: null,
	flexBasis: '100%',
	padding: null,
	paddingBottom: null,
	paddingLeft: null,
	paddingRight: null,
	paddingTop: null,
	width: '100%'
};

let fixtures = {};

const setup = (name = 'box', p = {}) => {
	const props = {
		...p
	};

	const box = statelessComponent(
		<Box { ...props } />
	);

	fixtures[name] = box;
	fixtures.scale = [0, 8, 16, 32, 64];

	return { ...fixtures };
};

const teardown = () => {
	fixtures = {};
};

suite('Box Component', () => {

	t('definition', (assert) => {
		const { box } = setup();
		assert.ok(box.instance, 'should be defined');

		teardown();
		assert.end();
	});

	t('default styles', (assert) => {
		const { box } = setup();
		const style = { ...baseStyles };

		assert.deepEqual(box.style, style, 'should have no new style by default');

		teardown();
		assert.end();
	});

	t('align self', (assert) => {
		const { box } = setup(__, { align: 'flex-start' });
		const style = { ...baseStyles, alignSelf: 'flex-start' };

		assert.deepEqual(box.style, style, 'should set align self style');

		teardown();
		assert.end();
	});

	t('column half width', (assert) => {
		const { box } = setup(__, { col: 6 });
		const style = { ...baseStyles, width: '50%', flexBasis: '50%' };

		assert.deepEqual(box.style, style, 'should set box width to 50%');

		teardown();
		assert.end();
	});

	t('column quarter width', (assert) => {
		const { box } = setup(__, { col: 3 });
		const style = { ...baseStyles, width: '25%', flexBasis: '25%' };

		assert.deepEqual(box.style, style, 'should set box width to 25%');

		teardown();
		assert.end();
	});

	t('padding scale', (assert) => {
		const { box, scale } = setup(__, { p: 3 });
		const style = { ...baseStyles, padding: scale[3] };

		assert.deepEqual(box.style, style, 'should set padding based on scale');

		teardown();
		assert.end();
	});

});
