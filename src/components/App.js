import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';
import '../styles/reset.css';

const AppWrapper = styled.section`
  text-align: center;

  h1 {
    font-size: 20px;
  }

  .AppLogo {
    height: 80px;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <img src={logo} className="AppLogo" alt="logo" />
        <h1>React/Redux Boilerplate</h1>
      </AppWrapper>
    );
  }
}

export default App;
