import './App.css'
import { useState } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

function App() {
 
  const [counter, setCounter] = useState(1); // Establece el valor inicial.

  return (
    <>
      <h1>Quiz 01 - 504100479</h1>
      <div className='flex-container'>
        <div className='flex-container'>
          <ComponentA counter={counter}/>
          <ComponentB counter={counter} setCounter={setCounter} />
          
        </div>
        <div>
          <ComponentC/>
        </div>
      </div>
    </>
  )
}

export default App
