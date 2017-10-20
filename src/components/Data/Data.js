import React from 'react';

const Data = ({ quotes }) => {
  return (
    <div className='data'>
      {quotes.map((quote, i) => <h4 key={i}>{quote}</h4>)}
    </div>
  );
};

export default Data;
