import React, { Component } from 'react';
import '../styles/reset.css';

import Header from './Page/Header';
import DataContainer from './Data/DataContainer';

class App extends Component {
  render() {
    return (
      <Header />
      <DataContainer />
    );
  }
}

export default App;
