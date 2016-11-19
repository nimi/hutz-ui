import React, {PropTypes} from 'react';
import Container from '../Container';
import { colors } from '../../styles';

function Block(props) {
	const borderColor = colors[props.borderColor] ?
		colors[props.borderColor] : props.borderColor;

	const styles = Object.assign({},
		style({...props, borderColor}),
		props.style
	);

	return (
		<Container
			className={className || 'hutz-block'}
			style={styles}
			my={2}
			{...props}
		/>
	);
}

Block.displayName = 'Block';

Block.propTypes = {
	borderBottom: PropTypes.bool,
	borderColor: PropTypes.string,
	borderLeft: PropTypes.bool,
	borderRight: PropTypes.bool,
	borderTop: PropTypes.bool,
	borderWidth: PropTypes.number
};

export default Block;

const style = (props) => ({
	borderBottomStyle: props.borderBottom ? 'solid' : null,
	borderColor: props.borderColor || colors.blue,
	borderLeftStyle: props.borderLeft ? 'solid' : null,
	borderRightStyle: props.borderRight ? 'solid' : null,
	borderTopStyle: props.borderTop ? 'solid' : null,
	borderWidth: props.borderWidth || 4
});
