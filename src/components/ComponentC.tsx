import React, { useState } from 'react';

const ComponenteC: React.FC = () => {
  const [contador, setContador] = useState<number>(1);

  const handleChange = () => {
   
    setContador(prevContador => prevContador + 1);
  };

  const handleReset = () => {

    setContador(1);
  };

  return (
    <div className="card">
      C
      <span className='span'>
        {contador}
      </span>
      <button type="button" onClick={handleChange}>CAMBIAR A, B y C</button>
      <br/>
      <button type="button" onClick={handleReset}>RESETEAR TODO</button>
    </div>
  );
};

export default ComponenteC;

