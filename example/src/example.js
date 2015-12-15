import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';
import { Home, Buttons, Inputs } from './views';
import { Nav } from './components';
import { FlexBox, Box } from '../../src/components';

const history = useBasename(createHistory)({
  basename: '/'
});

class App extends React.Component {
  render() {
    return (
      <FlexBox col={ true }>
        <Box>
          <FlexBox>
            <Box col={ 3 } fill={ false }>
              <Nav />
            </Box>
            <Box col={ 9 } fill={ false } p={ 2 }>
              {{ ...this.props.children }}
            </Box>
          </FlexBox>
        </Box>
        <Box className="footer">
          Copyright &copy; 2015 MIT.
        </Box>
      </FlexBox>
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
