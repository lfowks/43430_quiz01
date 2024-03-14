import { useEffect, useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

function App() {

  const [counter, setCounter] = useState(1);
  const [counterC, setCounterC] = useState(1);

  useEffect(() => {
    setCounter(counterC);
  }, [counterC])
  

  return (
    <>
      <h1>Quiz 01 - 604040646</h1>
      <div className='flex-container'>
        <div className='flex-container'>
          <ComponentA counter={counter}/>
          <ComponentB counter={counter} setCounter={setCounter}/>
        </div>
        <div>
          <ComponentC counterAB={counter} counterC={counterC} setCounter={setCounterC}/>
        </div>
      </div>
    </>
  )
}

export default App
