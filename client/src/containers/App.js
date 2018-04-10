import React, { Component } from 'react';
import './App.css'

import NewFailure from '../components/NewFailure/NewFailure';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="container">
          <Navbar />
          <NewFailure />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
