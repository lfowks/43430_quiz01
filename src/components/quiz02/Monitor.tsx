import React, { useState, useEffect } from 'react';

const Monitor = () => {
  const [price, setPrice] = useState(90);

  useEffect(() => {
    console.log("Precio Monitor actualizado:", price);
  }, [price]);
  
  return (
    <div className="card" onClick={() => setPrice(price + 100)}>Monitor $100</div>
  )
}

export default Monitor