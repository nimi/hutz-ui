import React from 'react';
import Container from '../Container';
import Menu from '../Menu';

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
	);
}

export default CardActions;
