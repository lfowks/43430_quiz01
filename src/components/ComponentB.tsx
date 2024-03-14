import { useState } from "react"

const getInitialClicks = (){

  
}


const ComponentB = () => {

  const [clicks, setClicks] = useState(()=> getInitialClicks());

  return (
    <div className="card">
      B
        <span className='span'>
        const number = 1
        </span>
        <button onClick={()=> setClicks(clicks+1)}> {clicks} CAMBIAR A Y B </button>;
      </div>
  )
}

export default ComponentB