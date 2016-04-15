import React, {PropTypes} from 'react';

export default function Break({breakLabel}) {
	return (
		<li style={style.item}>
			{breakLabel}
		</li>
	);
}

Break.displayName = 'Break';

Break.propTypes = {
	breakLabel: PropTypes.string
};

const style = {
	item: {
		letterSpacing: '0.2em',
//		padding: '0 10px',
		flex: '1 1 auto',
		textAlign: 'center'
	}
};
