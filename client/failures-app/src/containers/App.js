import React, { Component } from 'react';
import './App.css'

import Failure from '../components/Failure/Failure';
import Navbar from '../components/Navbar/Navbar';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="container">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
