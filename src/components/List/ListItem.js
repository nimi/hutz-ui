import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography, scale } from '../../styles';
import Container from '../Container';

function ListItem({
	icon,
	inline,
	px,
	py,
	fill,
	...props
}) {
	const listItemStyle = style(fill);
	const styles = {
		...listItemStyle,
		paddingTop: py ? scale[py] : null,
		paddingBottom: py ? scale[py] : null,
		paddingLeft: px ? scale[px] : null,
		paddingRight: px ? scale[px] : null
	};

	return <li style={styles} {...props} />;
}

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
	fill: PropTypes.bool,
	icon: PropTypes.bool,
	inline: PropTypes.bool
};

ListItem.defaultProps = {
	fill: true
};

export default radium(ListItem);

const style = (fill) => ({
	display: 'block',
	minWidth: 0,
	minHeight: 0,
	verticalAlign: 'middle',
	flex: fill ? '1 1 auto' : null
});
