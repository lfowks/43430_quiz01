import './App.css'
import Mouse from './components/quiz02/Mouse'
import Monitor from './components/quiz02/Monitor'
import Total from './components/quiz02/Total'

function App() {
  return (
    <>
      <h1>Quiz 02_504310350</h1>
      <div className='flex'>
        <Mouse/>
        <Monitor/>
      </div>
      <div className='totals'>
        <Total/>
      </div>
    </>
  )
}

export default App
