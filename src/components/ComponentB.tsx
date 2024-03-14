import { useState } from 'react'


const ComponentB = () => {

  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="card">
      B
      <span className='span'>
        {counter}
      </span>
      <button type="button" onClick={increment}>CAMBIAR A Y B</button>
    </div>
  )
}

export default ComponentB