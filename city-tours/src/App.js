import './App.scss';

import React, { Component } from 'react';
import Navbar from './components/NavBar/NavBar';
import TourList from './components/TourList';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList/>
        </React.Fragment>
    )
  }
}

export default App;
