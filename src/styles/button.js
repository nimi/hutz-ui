import color from './colors';

export default function buttonStyles(c = 'blue') {
	const BASE_COLOR = c;

	return {
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
			backgroundColor: color[BASE_COLOR],
			':active': {
			}
		},

		fillStyle: {
			width: '100%'
		},

		disabledStyle: {
			backgroundColor: color.gray,
			boxShadow: '0',
			color: color('gray', 5),
			cursor: 'default',
			top: '2px'
		},

		raisedStyle: {
			boxShadow: `0px 3px 0px 0px ${color(BASE_COLOR, 3)}`,
			':active': {
				top: '2px',
				boxShadow: `0px 1px 0px 0px ${color(BASE_COLOR, 3)}`
			}
		}
	};
}
