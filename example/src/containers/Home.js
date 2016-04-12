import React, {PropTypes} from 'react';
import {FlexBox, Box} from '../../../src';

export default function HomeContainer(props) {
	return (
		<FlexBox justify='center' align='center' style={style.container}>
			<Box col={ 9 } p={ 2 }>
				{props.children}
			</Box>
		</FlexBox>
	);
}

const style = {
	container: {
		height: '100%'
	}
};
