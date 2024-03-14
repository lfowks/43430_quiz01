import { useEffect, useState } from "react";
import ComponentB from "./ComponentB";
const ComponentA = () => {
   
    const [count, setCount] = useState(1);
    const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
    };
  return (
    <div className="card">
      A
        <span className='span'>
          {count}
        </span>
      </div>
  )
}

export default ComponentA