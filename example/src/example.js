import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {FlexBox, Box} from '../../src';
import {Nav} from './components';
import MainContainer from './containers/Main';
import HomeContainer from './containers/Home';
import {
	HomeView,
	ButtonView,
	InputView,
	FlexBoxView,
	SelectView,
	ListView,
	MenuView,
	TextView,
	CardView,
	AvatarView,
	DividerView,
	LoaderView,
	HeadingView,
	BannerView,
	BadgeView,
	IconView,
	MediaView,
	TooltipView,
	ToolbarView,
	TableView,
	SwitchView,
	AlertView,
	BreadcrumbsView,
	DialogView,
	StepTrackerView,
	BlockView,
	DropdownView,
	TabPanelView,
	PaginationView
} from './views';

const routes = (
	<Router history={hashHistory} >
		<Route path='/' component={HomeContainer}>
			<IndexRoute component={HomeView} />
		</Route>
		<Route path="/" component={MainContainer}>
			<Route path="alerts" components={AlertView} />
			<Route path="buttons" component={ButtonView} />
			<Route path="inputs" component={InputView} />
			<Route path="flexbox" component={FlexBoxView} />
			<Route path="selects" component={SelectView} />
			<Route path="lists" components={ListView} />
			<Route path="menus" components={MenuView} />
			<Route path="text" components={TextView} />
			<Route path="cards" components={CardView} />
			<Route path="avatars" components={AvatarView} />
			<Route path="dividers" components={DividerView} />
			<Route path="loaders" components={LoaderView} />
			<Route path="headings" components={HeadingView} />
			<Route path="banners" components={BannerView} />
			<Route path="badges" components={BadgeView} />
			<Route path="icons" components={IconView} />
			<Route path="media" components={MediaView} />
			<Route path="tooltips" components={TooltipView} />
			<Route path="toolbars" components={ToolbarView} />
			<Route path="tables" components={TableView} />
			<Route path="switches" components={SwitchView} />
			<Route path="breadcrumbs" components={BreadcrumbsView} />
			<Route path="dialogs" components={DialogView} />
			<Route path="steptrackers" components={StepTrackerView} />
			<Route path="blocks" components={BlockView} />
			<Route path="dropdowns" components={DropdownView} />
			<Route path="pagination" components={PaginationView} />
			<Route path="tabpanels" components={TabPanelView} />
		</Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
