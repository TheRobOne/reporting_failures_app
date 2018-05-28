import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css'

import NewFailure from './components/Failures/NewFailure';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import store from './store';
import Failures from './components/Failures/Failures';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container"> 
            <Navbar />
              <Route exact path="/" component={Failures} />
              <Route exact path="/add-failure" component={NewFailure} />
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
