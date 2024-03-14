import { useState } from 'react'

const ComponentC = () => {

  const [contador ,setContador ] = useState (1);
  
  const increment = () => {
    setContador(contador + 1);
  }

  const reset = () => {
    setContador(1);
  }

  return (
    <div className="card">
      C
        <span className='span'>
          {contador}
        </span>
        <button type="button" onClick={increment}>CAMBIAR A, B y C</button>
        <br/>
        <button type="button" onClick={reset}>RESETEAR TODO</button>
      </div>
  )
}

export default ComponentC