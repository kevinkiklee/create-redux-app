import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/reset.css';

import Header from './Page/Header';
import DataContainer from './Data/DataContainer';

const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <DataContainer />
      </AppWrapper>
    );
  }
}

export default App;
