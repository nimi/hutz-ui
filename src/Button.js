import React, { PropTypes } from 'react';
import Radium from 'radium';
import { buttonStyles } from './styles';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	static displayName = 'Button'

	static propTypes = {
		bt: PropTypes.string,
		disabled: PropTypes.bool,
		groupStyle: PropTypes.object,
		raised: PropTypes.bool,
		size: PropTypes.string
	}

	shouldComponentUpdate() {
		return !this.props.disabled;
	}

	render() {
		const { initialStyle,
				disabledStyle,
				fillStyle,
				raisedStyle } = buttonStyles(this.props.color);

		const { bt,
				disabled,
				groupStyle,
				raised,
				fill } = this.props;

		let styles = [ initialStyle ];

		if (disabled) { styles.push(disabledStyle); }
		if (fill) { styles.push(fillStyle); }
		if (groupStyle) { styles.push(groupStyle); }
		if (raised) { styles.push(raisedStyle); }

		return (
			<button
				{ ...this.props }
				style={ styles }
			/>
		);
	}
}

export default Radium(Button);
