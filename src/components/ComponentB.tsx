import React, { useState } from 'react';
import ComponentA from './ComponentA';

const ComponentB = () => {

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="card">
      B
      <span className='span'>
        {count}
      </span>
      <button type="button" onClick={incrementCount}>
        Incrementar A y B
      </button>
    </div>
  );
}

export default ComponentB;
