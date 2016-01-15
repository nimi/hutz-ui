import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';
import { Nav } from './components';
import { FlexBox, Box } from '../../src/components';
import {
	Home,
	Buttons,
	Inputs,
	FlexBoxView,
	SelectView,
	ListView,
	MenuView
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
		}
	}

	componentDidUpdate() {
		console.log('ja update');
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
	  <IndexRoute component={Home} />
	  <Route path="buttons" component={Buttons} />
	  <Route path="inputs" component={Inputs} />
	  <Route path="flexbox" component={FlexBoxView} />
	  <Route path="selects" component={SelectView} />
	  <Route path="lists" components={ListView} />
	  <Route path="menus" components={MenuView} />
	</Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
