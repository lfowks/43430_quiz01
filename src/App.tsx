import { useEffect, useState } from 'react'
import './App.css'
import Mouse from './components/quiz02/Mouse'
import Monitor from './components/quiz02/Monitor'
import Total from './components/quiz02/Total'

function App() {

  const [counter, setCounter] = useState();

  useEffect(() =>{
    setCounter(counter);
  }, [counter])


  return (
    <>
      <h1>Quiz 02-Emmanuel Pineda</h1>
      <div className='flex'>
        <Mouse counter={counter} />
        <Monitor counter={counter}/>
      </div>
      <div className='totals'>
        <Total/>
      </div>
    </>
  )
}

export default App
