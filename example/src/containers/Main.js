import React, {PropTypes} from 'react';
import {FlexBox, Box} from '../../../src';
import Nav from '../components/Nav';

const MainContainer = React.createClass({
	render() {
		return (
			<FlexBox>
				<Box className='nav' sm={3} md={3} lg={3} fill={ false }>
					<Nav />
				</Box>
				<Box sm={12} md={8} lg={7} fill={ false } py={ 2 } pl={ 2  } pr={ 4 }>
					{this.props.children}
				</Box>
			</FlexBox>
		);
	}
});

export default MainContainer;
