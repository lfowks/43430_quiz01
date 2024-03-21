import './App.css'
import Mouse from './components/quiz02/Mouse'
import Monitor from './components/quiz02/Monitor'
import Total from './components/quiz02/Total'
import { useEffect, useState } from 'react'

function App() {

 const [counter, setCounter] = useState(0);
 const [counterTotal, setCounterTotal] = useState(0);

useEffect(() => {
  setCounter(counterTotal)
}, [counterTotal])

 
 

  return (
    <>
      <h1>Quiz 02-504500656</h1>
      <div className='flex'>
        <Mouse counter={counter} setCounter={setCounter}/>
        <Monitor counter={counter} setCounter={setCounter}/>
      </div>
      <div className='totals'>
        <Total counter={counter} counterAll={setCounterTotal} />
      </div>
    </>
  )
}

export default App
