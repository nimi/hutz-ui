import color from './colors';
import typeography from './typeography';

export default function buttonStyles(c = 'blue') {
	const BASE_COLOR = c;
	const buttonTypeography = typeography.body1;
	const isWhite = BASE_COLOR === 'white';

	return {
		BASE_COLOR,

		initialStyle: {
			...buttonTypeography,
			cursor: 'pointer',
			position: 'relative',
			height: '3em',
			outline: 'none',
			border: isWhite ? `solid 1px ${color('gray', 3)}` : 0,
			borderRadius: 3,
			color: isWhite ? color.black : color.white,
			padding: 9,
			minWidth: '6em',
			textAlign: 'center',
			lineHeight: '16px',
			backgroundColor: color[BASE_COLOR],
			':hover': {
				backgroundColor: color(BASE_COLOR, 2),
				textDecoration: 'none'
			},
			':active': {
				backgroundColor: color(BASE_COLOR, 3),
				textDecoration: 'none'
			}
		},

		fillStyle: {
			width: '100%'
		},

		disabledStyle: {
			backgroundColor: color('gray', 3),
			boxShadow: '0',
			color: color('gray', 5),
			cursor: 'default',
			top: '2px'
		},

		raisedStyle: {
			boxShadow: `0px 3px 0px 0px ${color(BASE_COLOR, 4)}`,
			':active': {
				top: '2px',
				boxShadow: `0px 1px 0px 0px ${color(BASE_COLOR, 4)}`
			}
		},

		outlineStyle: {
			backgroundColor: 'transparent',
			color: color[BASE_COLOR],
			border: `1px solid ${color[BASE_COLOR]}`,
			':hover': {
				backgroundColor: 'transparent',
				color: color(BASE_COLOR, 2),
				border: `1px solid ${color(BASE_COLOR, 2)}`
			},
			':active': {
				backgroundColor: 'transparent',
				color: color(BASE_COLOR, 3),
				border: `1px solid ${color(BASE_COLOR, 3)}`
			}
		},

		linkStyle: {
			backgroundColor: 'transparent',
			border: 'transparent',
			color: color[BASE_COLOR],
			':hover': {
				backgroundColor: 'transparent',
				color: color(BASE_COLOR, 2),
				textDecoration: 'underline'
			},
			':active': {
				backgroundColor: 'transparent',
				color: color(BASE_COLOR, 3),
				fontWeight: 400
			}
		}
	};
}
