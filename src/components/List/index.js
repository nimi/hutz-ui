import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography, InputStyles } from '../../styles';
import Container from '../Container';
import ListItem from './ListItem';

function List({
	col,
	fill,
	inline,
	px,
	py,
	...props
}) {
	let styles = {
		...style.list,
		textAlign: inline ? 'center' : null
	};

	styles = inline ? { ...styles, ...style.inline } : styles;

	return (
		<Container col={col}>
			<ul style={[styles]}>
				{React.Children.map(props.children, listItem =>
					<ListItem fill={fill} inline={inline} px={px} py={py}>{listItem}</ListItem>
				 )}
			</ul>
		</Container>
	);
}

List.displayName = 'List';

List.propTypes = {
	inline: PropTypes.bool
};

export default radium(List);

var style = {
	list: {
		color: colors('gray', 5),
		fontSize: typeography.body1.fontSize,
		display: 'block',
		verticalAlign: 'middle',
		width: '100%',
		margin: 0,
		padding: 0,
		appearance: 'none',
		WebkitAppearance: 'none'
	},
	inline: {
		display: 'inline-flex'
	}
};
