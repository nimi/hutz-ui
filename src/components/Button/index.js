import React, { PropTypes, Component } from 'react';
import Radium from 'radium';
import { buttonStyles } from '../../styles';

class Button extends Component {
	constructor(props) {
		super(props);
	}

	static displayName = 'Button'

	static propTypes = {
		bt: PropTypes.string,
		color: PropTypes.string,
		disabled: PropTypes.bool,
		groupStyle: PropTypes.object,
		size: PropTypes.string
	}

	shouldComponentUpdate() {
		return !this.props.disabled;
	}

	render() {
		const { initialStyle,
				disabledStyle,
				fillStyle,
				raisedStyle,
				outlineStyle,
				linkStyle } = buttonStyles(this.props.color);

		const { bt,
				disabled,
				groupStyle,
				size } = this.props;

		let styles = [ initialStyle ];

		if (disabled) { styles.push(disabledStyle); }
		if (size) { styles.push(fillStyle); }
		if (groupStyle) { styles.push(groupStyle); }
		if (bt === 'raised') { styles.push(raisedStyle); }
		if (bt === 'outline') { styles.push(outlineStyle); }
		if (bt === 'link') { styles.push(linkStyle); }
		if (this.props.style) { styles.push(this.props.style); }

		return (
			<button
				{ ...this.props }
				style={styles}
			/>
		);
	}
}

export default Radium(Button);
