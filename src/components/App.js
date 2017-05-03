import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';
import '../styles/reset.css';

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React/Redux Boilerplate</h2>
      </AppWrapper>
    );
  }
}

export default App;
