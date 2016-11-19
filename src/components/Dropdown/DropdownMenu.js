import React, {PropTypes} from 'react';
import Container from '../Container';
import Menu from '../Menu';
import {colors} from '../../styles';

function DropdownMenu({open, type, ...props}) {
	if (!open) { return null; }

	return (
		<Container
			style={style.container}
		>
			<Menu type={type || 2}>
				{props.children}
			</Menu>
		</Container>
	);
}

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;

const style = {
	container: {
		backgroundColor: 'white',
		border: `solid 1px ${colors.gray}`,
		position: 'absolute',
		left: 0,
		right: 'auto',
		top: '100%',
		bottom: 'auto'
	}
};
