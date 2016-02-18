import React, { PropTypes } from 'react';
import { colors } from '../../styles';
import Box from '../Box';
import CardHeading from './CardHeading';
import CardActions from './CardActions';
import CardMedia from './CardMedia';
import CardText from './CardText';

function Card({
	actions,
	imgSrc,
	text,
	title,
	subtitle,
	...props
}) {
	return (
		<Box
			{ ...props }
			style={{
				...props.style,
				...cardContainerStyle(props)
			}}
		>
			{(() => title ? <CardHeading t={title} s={subtitle} /> : null)()}
			{(() => imgSrc ? <CardMedia s={imgSrc} /> : null)()}
			{(() => text ? <CardText t={text} /> : null)()}
			{(() => actions ? <CardActions as={actions} /> : null)()}
		</Box>
	);
}

Card.displayName = 'Card';

Card.propTypes = {
	actions: PropTypes.array,
	imgSrc: PropTypes.string,
	subtitle: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string
};

export default Card;

const cardContainerStyle = () => ({
	border: `solid 1px ${colors.gray}`,
});
