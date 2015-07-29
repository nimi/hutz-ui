import React, { PropTypes } from 'react';
import { colors, GRAY, BLUE, RED, GREEN, typeography } from './styles';
import Icon from './Icon';
import Radium from 'radium';

const initialColor = colors[GRAY].C4;
const focusColor = colors[BLUE].C5;
const errorColor = colors[RED].C5;
const successColor = colors[GREEN].C5;
const labelColor = colors[GRAY].C5;

const TextInputStyles = {
	initialInputStyle: {
		backgroundColor: 'transparent',
		border: `solid 1px ${initialColor}`,
		boxSizing: 'border-box',
		color: labelColor,
		outline: 'none',
		left: 0,
		width: '100%',
		padding: '10px'
	},

	initialContainerStyle: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column'
	},

	initialIconStyle: {
		display: 'none',
		position: 'absolute',
		right: '3px',
		bottom: 0
	},

	initialLabelStyle: {
		fontWeight: 500,
		top: '-35px'
	},

	activeIconStyle: {
		display: 'block'
	},

	focusInputStyle: {
		border: `solid 2px ${focusColor}`,
		padding: '9px'
	},

	errorInputStyle: {
		border: `solid 2px ${errorColor}`,
		padding: '9px'
	},

	successInputStyle: {
		border: `solid 2px ${successColor}`,
		padding: '9px'
	}
};

@Radium
class TextInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			focus: false,
			focusing: false
		};
	}

	static displayName = 'TextInput'

	static propTypes: {
		defaultValue: PropTypes.string,
		error: PropTypes.string,
		success: PropTypes.bool,
		label: PropTypes.bool,
		onBlur: PropTypes.func,
		onFocus: PropTypes.func,
		onChange: PropTypes.func,
		placeHolder: PropTypes.string,
		type: PropTypes.string,
		value: PropTypes.number
	}

	onChange() {
		console.log('change');
	}

	onBlur(e) {
		const { onBlur } = this.props;
		this.setState({
			focus: false
		});

		if (onBlur) { onBlur(e); }
	}

	onFocus(e) {
		const { onFocus } = this.props;
		this.setState({
			focus: true
		});

		if (onFocus) { onFocus(e); }
	}

	renderIcon(success, error) {
		if (success) {
			return <Icon type="check" color={ successColor } />;
		} else if (error) {
			return <Icon type="close" color={ errorColor } />;
		}
	}
	renderLabel(label) {
		if (label) { return (
			<label style={ TextInputStyles.initialLabelStyle }>
				{ label }
			</label>
		); }
	}

	render() {

		const { defaultValue,
				error,
				success,
				label,
				placeHolder,
				type } = this.props;

		const { focus } = this.state;

		const { initialInputStyle,
				focusInputStyle,
				errorInputStyle,
				successInputStyle,
				initialContainerStyle,
				initialIconStyle,
				activeIconStyle } = TextInputStyles;

		let inputStyles = [
			typeography.input,
			initialInputStyle
		];

		let containerStyles = [
			initialContainerStyle
		];

		let iconStyles = [
			initialIconStyle
		];

		if (focus) {
			inputStyles.push(focusInputStyle);
		}

		if (error || success) {
			iconStyles.push(activeIconStyle);

			if (error) {
				inputStyles.push(errorInputStyle);
			}

			if (success) {
				inputStyles.push(successInputStyle);
			}

		}

		return (
			<div
				style={ containerStyles }>
				{ this.renderLabel(label) }
				<input
					defaultValue={ defaultValue }
					placeholder={ placeHolder }
					onBlur={ () => this.onBlur() }
					onFocus={ () => this.onFocus() }
					onChange={ () => this.onChange() }
					style={ inputStyles }
					ref='textField'
					type={ type || 'text' }
				/>
				<div
					style={ iconStyles }>
					{ this.renderIcon(success, error) }
				</div>
			</div>
		);
	}
}

export default TextInput;
