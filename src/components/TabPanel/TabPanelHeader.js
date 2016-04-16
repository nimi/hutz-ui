import React, { PropTypes, Children, cloneElement } from 'react';
import Container from '../Container';
import Menu from '../Menu';
import Button from '../Button';
import { colors } from '../../styles';

function TabPanelHeader({ headerProps, activeIndex, backgroundColor, color, ...props}) {
	const styles = Object.assign({},
		style,
		props.style
	);

	const tabs = headerProps.map((ps, i) => {
		return (
			<Button key={i} {...ps}>{ps.label}</Button>
		);
	});

	return (
		<Container
			style={styles}
			{...props}
		>
			<Menu
				activeIndex={activeIndex}
				inline
				type={2}
				backgroundColor={backgroundColor}
				color={color}
			>
				{tabs}
			</Menu>
		</Container>
	);
}

TabPanelHeader.displayName = 'TabPanelHeader';

TabPanelHeader.propTypes = {
};

export default TabPanelHeader;

const style = {

};
