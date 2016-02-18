import React from 'react';
import Container from '../Container';
import Text from '../Text';

function CardText({t}) {
	return <Container px={2} py={1}><Text content={t} /></Container>;
}

export default CardText;
