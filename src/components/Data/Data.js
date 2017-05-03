import React from 'react';
import styled from 'styled-components';

const DataWrapper = styled.section`
  font-size: 16px;
  width: 1000px;
  margin: 25px auto;

  h4 {
    padding: 5px;
  }
`;

const Data = ({ quotes }) => {
  return (
    <DataWrapper>
      { quotes.map((quote, i) => <h4 key={i}>{quote}</h4>) }
    </DataWrapper>
  );
};

export default Data;
