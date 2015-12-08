import React, { PropTypes } from 'react';
import { typeography, InputTextStyles } from './styles';
import { noop } from './utils';
import Icon from './Icon';
import Radium from 'radium';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import InputCheckbox from './InputCheckbox';

class InputBase extends React.Component {
	static displayName = 'Input'

	constructor(props) {
		super(props);
	}

	static propTypes = {
		defaultValue: PropTypes.string,
		error: PropTypes.string,
		handleBlur: PropTypes.func,
		handleChange: PropTypes.func,
		handleFocus: PropTypes.func,
		label: PropTypes.string,
		placeHolder: PropTypes.string,
		success: PropTypes.bool,
		type: PropTypes.string,
		value: PropTypes.number,
		focus: PropTypes.bool
	}

	static defaultProps = {
		handleBlur: noop,
		handleChange: noop,
		handleFocus: noop,
		focus: false,
		type: 'text'
	}

	handleChange() {
		console.log('change');
	}

	renderIcon({ success, error } = this.props) {
		if (success) {
			return <Icon type="check" color={ InputTextStyles.successColor } />;
		} else if (error) {
			return <Icon type="close" color={ InputTextStyles.errorColor } />;
		}
	}

	renderLabel({ label } = this.props) {
		if (label) { return (
			<label style={ InputTextStyles.initialLabelStyle }>
				{ label }
			</label>
		); }
	}

	renderTextInput(inputStyles) {
		return <InputText {...this.props} baseStyles={ inputStyles } />;
	}

	renderTextArea(inputStyles) {
		return <InputTextArea {...this.props} baseStyles={ inputStyles } />;
	}

	renderCheckbox(inputStyles) {
		return <InputCheckbox {...this.props} baseStyles={ inputStyles } />;
	}

	renderInput() {
		const { type } = this.props;

		if (type === 'text') {
			return this.renderTextInput();
		} else if (type === 'textarea') {
			return this.renderTextArea();
		} else if (type === 'checkbox') {
			return this.renderCheckbox();
		}
	}

	componentStyles() {
		const { error, success, focus } = this.props;
		console.log(InputTextStyles);
		const { initialInputStyle,
				focusInputStyle,
				errorInputStyle,
				successInputStyle,
				initialContainerStyle,
				initialIconStyle,
				activeIconStyle } = InputTextStyles;

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

		return { inputStyles, containerStyles, iconStyles };
	}

	render() {
		const { containerStyles, iconStyles, inputStyles } = this.componentStyles();

		return (
			<div style={ containerStyles }>
				{ this.renderLabel() }
				{ this.renderInput(inputStyles) }
				<div
					style={ iconStyles }>
					{ this.renderIcon() }
				</div>
			</div>
		);
	}
}

export default Radium(InputBase);
