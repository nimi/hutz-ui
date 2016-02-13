import React, { PropTypes } from 'react';
import { colors } from './styles';
import { Box, Container, Heading, Media, Text, Menu } from './Components';

function CardActions({actions}) {
	return (
		<Container py={3}>
			<Menu inline type={2} fill={false}>
				{
					actions.map(({action, name}, i) =>
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
			style={cardContainerStyle(props)}
		>
			<Container px={2}>
				<Heading size={3} content={title} />
				<Heading size={4} content={subtitle} />
			</Container>
			<Container>
				<Media src={imgSrc} />
			</Container>
			<Container p={2}>
				<Text content={text} />
			</Container>
			{
				(() =>
					actions ?
					<CardActions actions={actions} /> :
					null
				)()
			}
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

Card.defaultProps = {
	title: 'Card title',
	subtitle: 'Card has subtitle',
	imgSrc: 'http://www.adweek.com/files/imagecache/node-detail/news_article/hans-moleman-hed-2012.jpg',
	text: 'Cards require a small amount of markup and classes to provide you with as much control as possible.',
	actions: [
		{ name: 'Link 1', action: () => console.log('clicky') },
		{ name: 'Link 2', action: () => console.log('clicky') }
	]
};

export default Card;

const cardContainerStyle = () => ({
	border: `solid 1px ${colors.gray}`,
});
