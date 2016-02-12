import React, { PropTypes } from 'react';

function Card({...props}) {
	return (
		<div
			{ ...props }
			style={{}}
		/>
	);
}

Card.displayName = 'Card';

Card.propTypes = {

};

export default Card;
