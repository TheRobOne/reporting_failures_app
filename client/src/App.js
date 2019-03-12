import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';

import NewFailure from './components/Failures/NewFailure';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';
import Failures from './components/Failures/Failures';
import Charts from './components/Charts/Charts';
import FailurePage from './components/Failures/FailurePage';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}

const theme = createMuiTheme({
  typography: {
      useNextVariants: true,
  },
  palette: {
    primary: blueGrey,
    secondary: cyan,
    error: red
  },
})

const styles = theme => ({
  container: {
    marginLeft: 225,
    marginRight: 225,
  }
});

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <Navbar />
              <div className={classes.container}>
                <Route exact path="/" component={Failures} />
                <Route exact path="/add-failure" component={NewFailure} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/charts" component={Charts} />
                <Route path="/failure/:id" component={FailurePage} />
              </div>
              <Footer />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default (withStyles(styles)(App));
