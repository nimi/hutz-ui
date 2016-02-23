import React, {PropTypes} from 'react';
import colors from '../../styles/colors';

function Divider({vertical, style = {}, ...props}) {
	return <hr {...props} style={{...dividerStyle, ...style}} />;
}

Divider.displayName = 'Divider';

Divider.propTypes = {
	vertical: PropTypes.bool
};

Divider.defaultProps = {
	vertical: false
};

export default Divider;

const dividerStyle = {
	backgroundColor: colors.gray,
	border: 'none',
	height: 1,
	margin: 0,
	marginLeft: 0,
	marginTop: -1
};
