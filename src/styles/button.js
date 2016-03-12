import color from './colors';
import typeography from './typeography';

export default function buttonStyles(c) {
	const BASE_COLOR = c || 'white';
	const alpha = c ? 1 : 0;
	const buttonTypeography = typeography.body1;
	const isWhite = BASE_COLOR === 'white';
	const contrastColor = isWhite ? color.black : color.white;
	const buttonColor = color(BASE_COLOR, 1, alpha);
	const buttonHoverColor = color(BASE_COLOR, 2);
	const buttonActiveColor = color(BASE_COLOR, 3);
	const buttonShadowColor = color(BASE_COLOR, 4);

	const styleMap = {
		BASE_COLOR,

		initialStyle: {
			...buttonTypeography,
			cursor: 'pointer',
			position: 'relative',
			outline: 'none',
			border: isWhite ? `solid 1px ${color('gray', 3)}` : 0,
			borderRadius: 3,
			color: contrastColor,
			padding: '0.75em 1.25em',
			textAlign: 'center',
			lineHeight: '1em',
			backgroundColor: buttonColor,
			':hover': {
				backgroundColor: buttonHoverColor,
				textDecoration: 'none'
			},
			':active': {
				backgroundColor: buttonActiveColor,
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
			boxShadow: `0px 3px 0px 0px ${buttonShadowColor}`,
			':active': {
				top: '2px',
				boxShadow: `0px 1px 0px 0px ${buttonShadowColor}`
			}
		},

		outlineStyle: {
			backgroundColor: 'transparent',
			color: buttonColor,
			border: `1px solid ${buttonColor}`,
			':hover': {
				backgroundColor: 'transparent',
				color: buttonHoverColor,
				border: `1px solid ${buttonHoverColor}`
			},
			':active': {
				backgroundColor: 'transparent',
				color: buttonActiveColor,
				border: `1px solid ${buttonActiveColor}`
			}
		},

		linkStyle: {
			backgroundColor: 'transparent',
			color: buttonColor,
			':hover': {
				backgroundColor: 'transparent',
				color: buttonHoverColor,
				textDecoration: 'underline'
			},
			':active': {
				backgroundColor: 'transparent',
				color: buttonActiveColor,
				fontWeight: 400
			}
		}
	};

	return styleMap;
}
