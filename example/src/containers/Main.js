import React, {PropTypes} from 'react';
import {FlexBox, Box} from '../../../src';
import Nav from '../components/Nav';

const MainContainer = React.createClass({
	render() {
		return (
			<FlexBox>
				<Box col={ 3 } fill={ false }>
					<Nav />
				</Box>
				<Box col={ 9 } fill={ true } p={ 2 }>
					{this.props.children}
				</Box>
			</FlexBox>
		);
	}
});

export default MainContainer;
