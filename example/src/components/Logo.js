import React, {PropTypes} from 'react';
import {Container, FlexBox, Heading, Text} from '../../../src';
import {IndexLink} from 'react-router';
import radium from 'radium';

const IL = radium(IndexLink);

export default function Logo(props) {
	return (
		<FlexBox align='center' direction='column' style={style.container}>
			<Heading size='1' style={style.heading}>
				<IL to="/">
					<Container tagName='span' color='red'>H</Container>
					<Container tagName='span' color='green'>U</Container>
					<Container tagName='span' color='blue'>T</Container>
					<Container tagName='span' color='yellow'>Z</Container>
					<span style={{color: '#FFF', fontWeight: 300, textShadow: '3px 0px #B9B9B9'}}>{`UI`}</span>
				</IL>
			</Heading>
			<Text style={style.text}>Stateless, functional components</Text>
		</FlexBox>
	);
}

Logo.displayName = 'Logo';

Logo.propTypes = {
	large: PropTypes.bool
};

const style = {
	container: {
		height: '100%',
		margin:'auto'
	},
	heading: {
		fontSize: 40
	},
	text: {
		fontStyle: 'italic',
		color: '#8C8C8C'
	}
};
