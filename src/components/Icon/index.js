import React, { PropTypes } from 'react';
import Radium from 'radium';
import icons from '../../icons';

class Icon extends React.Component {
	constructor(props) {
		super(props);
	}

	static displayName = 'Icon'

	static propTypes = {
		color: PropTypes.string,
		size: PropTypes.number,
		type: PropTypes.string
	}

	static defaultProps = {
		size: 25
	}

	getIcon(icon) {
		return icons.get(icon);
	}

	render() {
		const { type, color, size } = this.props;

		return (
			<svg
				height="100%"
				preserveAspectRatio="xMidYMid meet"
				viewBox={`0 0 ${size} ${size}`}
				stroke={ color || 'black' }
				fill={ color || 'black' }
				style={{height: `${size}px`, width: `${size}px`}}
				width="100%">
				<g id={ type }>
					<path d={ this.getIcon(type) } />
				</g>
			</svg>
		);
	}
}

export default Radium(Icon);
