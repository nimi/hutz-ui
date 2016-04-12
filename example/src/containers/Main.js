import React, {PropTypes} from 'react';
import {FlexBox, Box} from '../../../src';
import Nav from '../components/Nav';

export default function MainContainer(props) {
	return (
		<FlexBox>
			<Box col={ 3 } fill={ false }>
				<Nav />
			</Box>
			<Box col={ 9 } fill={ true } p={ 2 }>
				{props.children}
			</Box>
		</FlexBox>
	);
}
