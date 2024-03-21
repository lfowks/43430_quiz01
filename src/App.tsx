import './App.css'
import Mouse from './components/quiz02/Mouse'
import Monitor from './components/quiz02/Monitor'
import Total from './components/quiz02/Total'
import { useState } from 'react';

function App() {

  const [total,setTotal] = useState(0);




  return (
    <>
      <h1>Quiz 02 504420911</h1>
      <div className='flex'>
        <Mouse setTotal={setTotal} total={total}/>
        <Monitor total={total} setTotal={setTotal}/>
      </div>
      <div className='totals'>
        <Total setTotal={setTotal} total={total} />
      </div>
    </>
  )
}

export default App
