import './App.css'
import { useState } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

function App() {
 
  const [cantidad, setCantidad] = useState(1); // Establece el valor inicial.
  const MAX = 100; // Valor máximo del rango
 
  // FUNCIONES 
  function handleChange(e) {
    setCantidad(+e.target.value)
  }
 
  function handleIncrementClick(){
    const valor =  cantidad + 1 ;
    if(valor > MAX){
      alert('Cantidad no válida.');
      return;
    }
    setCantidad(valor);
  }

  return (
    <>
      <h1>Quiz 01 - 504100479</h1>
      <div className='flex-container'>
        <div className='flex-container'>
          <ComponentA/>
          <ComponentB
          operador='+'
          fn = { handleIncrementClick } 
          />
          
        </div>
        <div>
          <ComponentC/>
        </div>
      </div>
    </>
  )
}

export default App
