import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/reset.css';

import Header from './Page/Header';

const AppWrapper = styled.section`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
      </AppWrapper>
    );
  }
}

export default App;
