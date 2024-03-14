import { useState } from "react";
const ComponentB = () => {
  const [number, setNumber] = useState(1);
    return (
      <div className="card">
        B
        <span className='span'>{number}
        </span>
        <button type="button" onClick={() => setNumber(number + 1)}>CAMBIAR A Y B</button>
      </div>
    )
  }



export default ComponentB