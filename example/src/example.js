import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, IndexRoute, RouteHandler } from 'react-router';
import { createHistory, useBasename } from 'history';
import { Home, Buttons, Inputs } from './views';

const history = useBasename(createHistory)({
  basename: '/'
});

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Components</h1>
        <h2>
          <a href="https://github.com/nicholaslmitchell/hutz-ui">View project on GitHub</a>
        </h2>
        {this.props.children}
        <div className="footer">
          Copyright &copy; 2015 MIT.
        </div>
      </div>
    );
  }
}

const routes = (
  <Router history={history} >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="buttons" component={Buttons} />
      <Route path="inputs" component={Inputs}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
