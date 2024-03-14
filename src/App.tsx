import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

function App() {

  

  return (
    <>
      <h1>Quiz 01 - 504500656</h1>
      <div className='flex-container'>
        <div className='flex-container'>
          <ComponentA/>
          <ComponentB/>
        </div>
        <div>
          <ComponentC />
        </div>
      </div>
    </>
  )
}

export default App
