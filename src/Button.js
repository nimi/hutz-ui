import React, { PropTypes } from 'react';
import Radium from 'radium';
import { colors, BLUE, RED, GREEN, GRAY } from './styles';
// import PureRender from './decorators/PureRender';
// import { pipe } from 'ramda';

const ButtonStyles = {
	initialStyle: {
		cursor: 'pointer',
		position: 'relative',
		height: '3em',
		outline: 'none',
		border: 0,
		borderRadius: 3,
		color: '#FFFFFF',
		padding: 9,
		minWidth: '6em',
		textAlign: 'center',
		lineHeight: '16px',
		backgroundColor: colors[BLUE].C5,
		boxShadow: `0px 3px 0px 0px ${colors[BLUE].C6}`,
		':active': {
			top: '2px',
			boxShadow: `0px 1px 0px 0px ${colors[GRAY].C7}`
		}
	},

	positiveStyle: {
		backgroundColor: colors[GREEN].C5,
		boxShadow: `0px 3px 0px 0px ${colors[GREEN].C6}`
	},

	negativeStyle: {
		backgroundColor: colors[RED].C5,
		boxShadow: `0px 3px 0px 0px ${colors[RED].C6}`
	},

	disabledStyle: {
		backgroundColor: colors[GRAY].C4,
		boxShadow: '0',
		color: colors[GRAY].C5,
		cursor: 'default',
		top: '2px'
	}
};

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	static displayName = 'Button'

	static defaultProps = {
		disabled: false
	}

	static propTypes = {
		children: PropTypes.node,
		disabled: PropTypes.bool,
		status: PropTypes.string,
		styles: PropTypes.array,
		type: PropTypes.string
	}

	shouldComponentUpdate() {
		return !this.props.disabled;
	}

	render() {
		const { initialStyle,
				activeStyle,
				disabledStyle } = ButtonStyles;

		const { children,
				disabled,
				type,
				status } = this.props;

		let styles = [ initialStyle ];

		if (status === 'positive' || status === 'negative') {
			styles.push(ButtonStyles[status + 'Style']);
		}

		if (disabled) {
			styles.push(disabledStyle);
		}

		if (this.props.active) {
			styles.push(activeStyle);
		}

		return (
			<button
				style={ styles }
				role='button'
				status={ status }
				type={ type || 'button' }>
				{ children }
			</button>
		);
	}
}

export default Radium(Button);
