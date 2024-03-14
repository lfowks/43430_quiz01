import { useState } from "react"
import ComponentA from "./ComponentA"

const ComponentB = ({numberToShow}: {numberToShow: string}) => {

  const [myNumber, setMyNumber] = useState(numberToShow);

  return (
    <div className="card">
      B
        <span className='span'>
          1
        </span>
        <button type="button">CAMBIAR A Y B</button>
      </div>
  )
}

export default ComponentB