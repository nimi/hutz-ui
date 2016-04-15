import React, {PropTypes} from 'react';
import {FlexBox, Box} from '../../../src';

const HomeContainer = React.createClass({
	render() {
		return (
			<FlexBox justify='center' align='center' style={style.container}>
				<Box col={ 9 } p={ 2 }>
					{this.props.children}
				</Box>
			</FlexBox>
		);
	}
});

export default HomeContainer;

const style = {
	container: {
		height: '100%',
		textAlign: 'center'
	}
};
