import React from 'react';
import Router, { Route, DefaultRoute, RouteHandler } from 'react-router';
import { Home, Buttons, Inputs } from './views';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Components</h1>
        <h2>
          <a href="https://github.com/nicholaslmitchell/hutz-ui">View project on GitHub</a>
        </h2>
        <RouteHandler/>
        <div className="footer">
          Copyright &copy; 2015 MIT.
        </div>
      </div>
    );
  }
}

let routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route path="buttons" handler={Buttons} />
    <Route path="inputs" handler={Inputs} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
