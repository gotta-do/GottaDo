import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './redux-toolkit/redux-toolkit';
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/loginpage/Loginpage';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router basename='/React'>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/login' component={Loginpage} />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
