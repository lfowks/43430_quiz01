import React, { useState } from 'react';

const ComponenteB: React.FC = () => {
  const [contador, setContador] = useState<number>(1);

  const handleChange = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <div className="card">
      B
      <span className='span'>
        {contador}
      </span>
      <button type="button" onClick={handleChange}>CAMBIAR A Y B</button>
    </div>
  );
};

export default ComponenteB;
