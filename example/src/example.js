import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';
import { Nav } from './components';
import { FlexBox, Box } from '../../src';
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
	DividerView
} from './views';

const history = useBasename(createHistory)({
  basename: '/'
});

class Layout extends React.Component {
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
}

class App extends React.Component {

	constructor(props) {
		super();

		this.state = {
			componentName: ''
		};
	}

	render() {
		return (
			<Layout name={this.state.componentName} {...this.props} />
		);
	}
}

const routes = (
  <Router history={history} >
	<Route path="/" component={App}>
	  <IndexRoute component={HomeView} />
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
	</Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
