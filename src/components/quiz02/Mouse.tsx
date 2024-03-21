import React, { useState, useEffect } from 'react';

import Keyboard from "./Keyboard";

const Mouse = () => {
  const [price, setPrice] = useState(90);

  useEffect(() => {
    console.log("Precio Mouse actualizado:", price);
  }, [price]);

  return (
    <div className="flex">
      <div className="card" onClick={() => setPrice(price + 100)}>Mouse $60</div>
     <Keyboard/>
    </div>
  )
}

export default Mouse