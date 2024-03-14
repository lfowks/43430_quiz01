import { useState } from "react"

const ComponentA = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className="card">
      A
        <span className='span'>{number}
          </span>
      </div>
  )
}

export default ComponentA