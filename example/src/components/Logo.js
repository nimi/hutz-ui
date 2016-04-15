import React, {PropTypes} from 'react';
import {Container, FlexBox, Heading} from '../../../src';
import {IndexLink} from 'react-router';
import radium from 'radium';

const IL = radium(IndexLink);

export default function Logo(props) {
	const style = logoStyle(props);

	return (
		<FlexBox align='center' direction='column' style={style.container}>
			<Heading size={1} style={style.heading}>
				<IL to="/">
					<Container tagName='span' color='red'>H</Container>
					<Container tagName='span' color='green'>U</Container>
					<Container tagName='span' color='blue'>T</Container>
					<Container tagName='span' color='yellow'>Z</Container>
					<span style={{color: '#FFF', fontWeight: 300, textShadow: '3px 0px #B9B9B9'}}>{`UI`}</span>
				</IL>
			</Heading>
		</FlexBox>
	);
}

Logo.displayName = 'Logo';

Logo.propTypes = {
	large: PropTypes.bool
};

const logoStyle = ({large}) => ({
	container: {
		height: '100%',
		margin:'auto'
	},
	heading: {
		fontSize: large ? 60 : 40,
		margin: 0
	}
});
