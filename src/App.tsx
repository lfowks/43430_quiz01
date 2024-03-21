import React, { useState, useEffect } from 'react';
import './App.css';
import Mouse from './components/quiz02/Mouse';
import Monitor from './components/quiz02/Monitor';
import Total from './components/quiz02/Total';

function App() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (total >= 1000) {
      alert("¡Advertencia! Ya ha llegado a los $1000.");
    }
  }, [total]);

  const handleItemClick = (price: number) => {
    setTotal(prevTotal => prevTotal + price);
  };

  return (
    <>
      <h1>Quiz 02-504350093</h1>
      <div className='flex'>
        <Mouse onClick={() => handleItemClick(60)} />
        <Monitor onClick={() => handleItemClick(100)} />
      </div>
      <div className='totals'>
        <Total total={total} />
      </div>
    </>
  );
}

export default App;


