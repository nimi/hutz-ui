import React from 'react';
import Container from '../Container';
import Heading from '../Heading';

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

export default CardHeading;
