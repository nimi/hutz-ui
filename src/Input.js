import React, { PropTypes } from 'react';
import { typeography, InputStyles } from './styles';
import { capitalize } from './utils';
import Icon from './Icon';
import radium from 'radium';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import InputCheckbox from './InputCheckbox';

class Input extends React.Component {
	static displayName = 'Input'

	constructor(props) {
		super(props);
	}

	static propTypes = {
		defaultValue: PropTypes.string,
		error: PropTypes.bool,
		label: PropTypes.string,
		placeHolder: PropTypes.string,
		size: PropTypes.string,
		success: PropTypes.bool,
		type: PropTypes.string,
		value: PropTypes.number
	}

	static defaultProps = {
		type: 'text'
	}

	renderIcon({ success, error } = this.props) {
		if (success) {
			return <Icon type="check" color={ InputStyles.successColor } />;
		} else if (error) {
			return <Icon type="close" color={ InputStyles.errorColor } />;
		}
	}

	renderLabel({ label } = this.props) {
		if (!label) { return null; }
		return (
			<label style={ InputStyles.initialLabelStyle }>
				{ label }
			</label>
		);
	}

	renderText(inputStyles) {
		return <InputText {...this.props} style={ inputStyles } />;
	}

	renderTextarea(inputStyles) {
		return <InputTextArea {...this.props} style={ inputStyles } />;
	}

	renderCheckbox(inputStyles) {
		return <InputCheckbox {...this.props} style={ inputStyles } />;
	}

	renderInput(inputStyles) {
		return this[`render${capitalize(this.props.type)}`](inputStyles);
	}

	componentStyles() {
		const { error, success, size } = this.props;
		const { initialInputStyle,
				errorInputStyle,
				successInputStyle,
				initialContainerStyle,
				initialIconStyle,
				activeIconStyle,
				inputContainerStyle } = InputStyles;

		let inputStyles = {
			...typeography.input,
			...initialInputStyle
		};

		let inputContainerStyles = {
			...inputContainerStyle
		};

		let containerStyles = [
			initialContainerStyle
		];

		let iconStyles = [
			initialIconStyle
		];

		if (error || success) {
			iconStyles.push(activeIconStyle);

			if (error) {
				inputContainerStyles = { ...inputContainerStyles, ...errorInputStyle };
			}

			if (success) {
				inputContainerStyles = { ...inputContainerStyles, ...successInputStyle };
			}
		}

		if (size === 'fill') {
			containerStyles.push({ width: '100%' });
		}

		return { inputStyles, containerStyles, iconStyles, inputContainerStyles };
	}

	render() {
		const { containerStyles, iconStyles, inputStyles, inputContainerStyles } = this.componentStyles();

		return (
			<div style={ containerStyles }>
				{ this.renderLabel() }
				<div style={ inputContainerStyles }>
					{ this.renderInput(inputStyles) }
				</div>
				<div
					style={ iconStyles }>
					{ this.renderIcon() }
				</div>
			</div>
		);
	}
}

export default radium(Input);
