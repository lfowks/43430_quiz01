import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import Counter from "./ejercicios/UseState/Counter";
import TestEffect from "./ejercicios/UseEffect/TestEffect";

function App() {
  return (
    <>
      <h1>Quiz 01-Emmanuel Pineda</h1>
      <div className='flex-container'>
        <div className='flex-container'>
          <ComponentA/>
          <ComponentB/>
        </div>
        <div>
          <ComponentC/>
        </div>
      </div>
    </>
  )
}

export default App
