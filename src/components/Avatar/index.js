import React, {PropTypes} from 'react';
import colors from '../../styles/colors';
import Container from '../Container';
import Media from '../Media';
import Icon from '../Icon';

function Avatar({src, icon, letter, size, color, align, name,  backgroundColor, ...props}) {
	const nameAlign = name && ('left' || align);
	const { containerStyle, nameStyle } = avatarStyle({src, nameAlign, backgroundColor});
	const child = Boolean(src) ?
		<Media src={src} /> : icon ?
		<Icon type={icon} color={color} size={22} /> :
		<span>{letter}</span>;

	return (
		<Container fill={false}>
			{nameAlign === 'right' ?
			<span style={nameStyle}>{name}</span> : null}
			<Container style={{...containerStyle, ...props.style}}>
				{React.cloneElement(child, {})}
			</Container>
			{nameAlign === 'left' ?
			<span style={nameStyle}>{name}</span> : null}
		</Container>
	);
}

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
	align: PropTypes.string,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	icon: PropTypes.string,
	letter: PropTypes.string,
	name: PropTypes.string,
	size: PropTypes.number,
	src: PropTypes.string
};

export default Avatar;

const avatarStyle = ({src, nameAlign, backgroundColor = 'blue'}) => ({
	containerStyle: {
		background: src || !backgroundColor ? null : colors[backgroundColor],
		color: 'white',
		position: 'relative',
		borderRadius: '50%',
		display: 'inline-block',
		fontSize: '1.75em',
		lineHeight: '1.75em',
		height: '40px',
		overflow: 'hidden',
		textAlign: 'center',
		width: '40px'
	},
	nameStyle: {
		fontSize: '1.25em',
		lineHeight: '40px',
		verticalAlign: 'top',
		display: 'inline-block',
		paddingLeft: nameAlign ==='left' ? '20px' : null,
		paddingRight: nameAlign ==='right' ? null : '20px'
	}
});
