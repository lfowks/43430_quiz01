
import Keyboard from "./Keyboard";

const Mouse = ({counter}) => {

  const price = 60;

  return (
    <div className="flex">
     <div className="card">Mouse ${price}</div>
     <Keyboard counter={counter+60}/>
    </div>
  )
}

export default Mouse