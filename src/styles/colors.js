import Symbol from 'es6-symbol';

export const RED = Symbol('red');
export const BLUE = Symbol('blue');
export const GREEN = Symbol('green');
export const YELLOW = Symbol('yellow');
export const ORANGE = Symbol('orange');
export const PURPLE = Symbol('purple');
export const GRAY = Symbol('gray');
export const WHITE = Symbol('white');

export const colors = {
	[BLUE]: {
		C5: '#6B9EDE',
		C6: '#4174B5'
	},

	[RED]: {
		C5: '#FD8D85',
		C6: '#D35D55'
	},

	[GREEN]: {
		C5: '#49C9BE',
		C6: '#18998E'
	},

	[YELLOW]: {
		C5: '#6B9EDE'
	},

	[ORANGE]: {
		C5: '#6B9EDE'
	},

	[PURPLE]: {
		C5: '#6B9EDE'
	},

	[GRAY]: {
		C4: '#D3D3D3',
		C5: '#B5B5B5',
		C7: '#919191'
	},

	[WHITE]: {
		C5: '#6B9EDE'
	}
};
