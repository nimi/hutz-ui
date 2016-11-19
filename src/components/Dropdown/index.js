import React, { PropTypes } from 'react';
import Container from '../Container';
import Icon from '../Icon';
import Button from '../Button';
import {colors} from '../../styles';
import DropdownMenu from './DropdownMenu';

function Dropdown({ buttonLabel, ...props }) {
	const styles = Object.assign({},
		dropdownStyle.container,
		props.style
	);

	return (
		<Container
			fill={false}
			style={styles}
			{...props}
			className={this.props.className || 'hutz-dropdown'}
		>
			<Button style={dropdownStyle.button}>
				{buttonLabel}
				<Icon
					type='arrow'
					size={10}
					style={dropdownStyle.arrow}
				/>
			</Button>
			{props.children}
		</Container>
	);
}

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
	buttonLabel: PropTypes.string,
	open: PropTypes.bool
};

Dropdown.defaultProps = {
	open: false
};

export default Dropdown;

const dropdownStyle = {
	container: {
		position: 'relative',
		minHeight: 40,
		maxWidth: 200
	},
	button: {
		width: '100%'
	},
	arrow: {
		display: 'inline-block',
		paddingLeft: '10%',
		paddingRight: '5%',
		paddingBottom: 4,
		width: 5
	}
};
