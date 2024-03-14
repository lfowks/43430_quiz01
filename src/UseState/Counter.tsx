import { useState } from 'react'

const Counter = () => {
    
  const [contador, setContador] = useState(1);

  const increment = () => {
    setContador(contador + 1);
  };


  const reset = () => {
    setContador(1);
  };

  return (
    <div>
        
        <h1>{contador}</h1>
        <button type='button' onClick={increment}>Cambiar A y B</button>

        <button type='button' onClick={reset}>RESETEAR TODO</button>
    </div>
  )
}

export default Counter