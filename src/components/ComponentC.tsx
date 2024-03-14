import { useState } from "react"

const ComponentC = () => {

  

  const [clicks, setClicks] = useState(()=> getInitialClicks());

  return (
    <div className="card">
      C
        <span className='span'>
          1
        </span>
        <button onClick={()=> setClicks(clicks+1)}> {clicks} CAMBIAR A, B y C </button>;
        <br/>
        <button onClick={()=> setClicks(clicks=0)}> {clicks} RESETEAR TODO </button>;
      </div>
  )
}

export default ComponentC