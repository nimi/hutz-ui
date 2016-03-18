import React, {PropTypes} from 'react';
import FlexBox from '../FlexBox';

function Banner({
	align,
	image,
	style,
	...props
}) {
	const alignItems = alignment[align];
	const styles = Object.assign(
		bannerStyle({align, image}),
		style
	);

	return (
		<FlexBox
			direction='column'
			alignItems={alignItems}
			justify='center'
			style={styles}
			{...props}
		/>
	);
}

export default Banner;

Banner.propTypes = {
	align: PropTypes.oneOf(['center', 'left', 'right']),
	image: PropTypes.string
};

const bannerStyle = ({align, image}) => ({
	minHeight: '100vh',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundImage: !!image ? `url(${image})` : null,
	textAlign: align === 'center' ? 'center' : null
});

const alignment = {
	center: 'center',
	left: 'flex-start',
	right: 'flex-end'
};
