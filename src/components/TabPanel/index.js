import React, { PropTypes, Children, cloneElement } from 'react';
import TabPanelHeader from './TabPanelHeader';
import Container from '../Container';
import { colors } from '../../styles';

function TabPanel({ activeIndex, backgroundColor, color, children, ...props }) {
	const styles = Object.assign({},
		style,
		props.style
	);

	const activePanel = Children.map(children, (panel, i) => {
		if (activeIndex === i) {
			return cloneElement(panel, {
				key: i,
				...panel.props
			});
		}
	}).filter(p => Boolean(p));

	const headerProps = Children.map(children, ({props}) => props);

	return (
		<Container
			style={styles}
			{...props}
			className={props.className || 'hutz-tabpanel'}
		>
			<TabPanelHeader
				headerProps={headerProps}
				activeIndex={activeIndex}
				backgroundColor={backgroundColor}
				color={color}
			/>
			{activePanel}
		</Container>
	);
}

TabPanel.displayName = 'TabPanel';

TabPanel.propTypes = {
	activeIndex: PropTypes.number
};

export default TabPanel;

const style = {

};
