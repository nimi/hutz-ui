import React, {PropTypes} from 'react';
import Container from '../Container';

function Badge({
	backgroundColor,
	color,
	round,
	circle,
	pill,
	className,
	...props
}) {

	return (
		<Container
			color={color || 'white'}
			backgroundColor={backgroundColor || 'blue'}
			round={round}
			circle={circle || pill}
			px={!circle ? 1 : null}
			style={badgeStyle({circle})}
			className={className || 'hutz-badge'}
			{...props}
		/>
	);
}

export default Badge;

Badge.displayName = 'Badge';

Badge.propTypes = {
	backgroundColor: PropTypes.string,
	circle: PropTypes.bool,
	color: PropTypes.string,
	round: PropTypes.oneOfType([
		React.PropTypes.bool,
		React.PropTypes.oneOf([
			'top',
			'right',
			'bottom',
			'left'
		])
	])
};

const badgeStyle = ({circle}) => ({
	alignItems: 'center',
	display: 'inline-flex',
	fontSize: 12,
	fontWeight: 600,
	height: 25,
	justifyContent: 'center',
	width: circle ? 25 : null
});
