import React, { PropTypes } from 'react';
import Container from '../Container';
import FlexBox from '../FlexBox';
import { colors } from '../../styles';

import Step from './Step';

function StepTracker({ steps, active, ...props }) {
	const stepItems = steps.map((step, i) => (
		<Step
			key={i}
			first={i === 0}
			width={`${100 / steps.length}%`}
			active={i <= active}
			{...step}
		/>
	));
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<FlexBox
			align='flex-start'
			justify='space-between'
			style={styles}
			{...props}
		>
			{stepItems}
		</FlexBox>
	);
}

StepTracker.displayName = 'StepTracker';

StepTracker.propTypes = {
	active: PropTypes.number,
	steps: PropTypes.array.isRequired
};

export default StepTracker;

const style = {
	fontSize: 16,
	fontWeight: 400,
	color: colors.gray
};
