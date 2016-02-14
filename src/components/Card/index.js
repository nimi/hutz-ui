import React, { PropTypes } from 'react';
import { colors } from '../../styles';
import { Box, Container, Heading, Media, Text, Menu } from '../../';

function CardHeading({t, s}) {
	return (
		<Container p={2}>
			<Heading size={3} content={t} style={{margin: '0.25em 0'}} />
			{(() =>
				Boolean(s) ?
				<Heading size={4} content={s} style={{margin: '0.5em 0'}} /> :
				null
			 )()}
		</Container>
	);
}

function CardMedia({s}) {
	return <Container ><Media src={s} /></Container>;
}

function CardText({t}) {
	return <Container px={2} py={1}><Text content={t} /></Container>;
}

function CardActions({as}) {
	return (
		<Container py={2}>
			<Menu inline type={2} fill={false}>
				{
					as.map(({action, name}, i) =>
						<a
							onClick={action}
							href='#'
							key={i}
							style={{ padding: '0 16px'}}
						>
							{name}
						</a>
					)
				}
			</Menu>
		</Container>
	)
}

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
	title: PropTypes.string,
	subtitle: PropTypes.string,
	imgSrc: PropTypes.string,
	text: PropTypes.string,
	actions: PropTypes.array
};

export default Card;

const cardContainerStyle = () => ({
	border: `solid 1px ${colors.gray}`,
});
