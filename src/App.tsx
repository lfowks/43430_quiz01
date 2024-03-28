import './App.css'
import Mouse from './components/quiz02/Mouse'
import Monitor from './components/quiz02/Monitor'
import Total from './components/quiz02/Total'
import {} from 'react'
import MyContextProvider from './useContext/MyContextProvider'

function App() {

  return (
    <>
      <h1>Quiz 02-504500656</h1>
      <MyContextProvider>
      <div className='flex'>
        <Mouse/>
        <Monitor/>
      </div>
      <div className='totals'>
        <Total/>
      </div>
      </MyContextProvider>
    </>
  )
}

export default App
