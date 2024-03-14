import { useState } from 'react'

const Counter = () => {
    
  const [contador, setContador] = useState(0);

  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <div>
        <button type='button' onClick={decrement}> - - </button>
        <h1>{contador}</h1>
        <button type='button' onClick={increment}>++</button>

        <button type='button' onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
