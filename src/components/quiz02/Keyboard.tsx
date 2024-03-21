import React, { useState, useEffect } from 'react';

const Keyboard = () => {
  const [price, setPrice] = useState(90);

  useEffect(() => {
    console.log("Precio Keyboard actualizado:", price);
  }, [price]);

  return (
    <div className="card" onClick={() => setPrice(price + 90)}>Keyboard $90</div>
  );
}

export default Keyboard

