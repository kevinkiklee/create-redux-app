import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';

const HeaderWrapper = styled.section`
  h1 {
    font-size: 20px;
  }

  .AppLogo {
    height: 80px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} className="AppLogo" alt="logo" />
      <h1>React/Redux Boilerplate</h1>
    </HeaderWrapper>
  );
};

export default Header;
