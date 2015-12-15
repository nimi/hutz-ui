import React, { PropTypes } from 'react';
import Radium from 'radium';
import icons from './icons';

const IconStyles = {
	normalStyle: {
		height: '25px',
		width: '25px'
	}
};

class Icon extends React.Component {
	constructor(props) {
		super(props);
	}

	static displayName = 'Icon'

	static propTypes = {
		color: PropTypes.string,
		type: PropTypes.string
	}

	getIcon(icon) {
		return icons.get(icon);
	}

	render() {

		const { type, color } = this.props;
		const { normalStyle } = IconStyles;
		const styles = [normalStyle];

		return (
			<svg
				height="100%"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 25 25"
				stroke={ color || 'black' }
				fill={ color || 'black' }
				style={ styles }
				width="100%">
				<g id={ type }>
					<path d={ this.getIcon(type) } />
				</g>
			</svg>
		);
	}
}

export default Radium(Icon);
