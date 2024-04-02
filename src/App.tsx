import './App.css'
import Mouse from './components/quiz02/Mouse'
import Monitor from './components/quiz02/Monitor'
import Total from './components/quiz02/Total'
import Keyboard from './components/quiz02/Keyboard'
import MyContextProvider from './UseContext/MyContextProvider'

function App() {
  
  return (
    <>
      <h1>Quiz 02</h1>
      <MyContextProvider>
        <div className='flex'>
          <Mouse />
          <Keyboard />
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
