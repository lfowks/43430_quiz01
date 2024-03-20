
import Keyboard from "./Keyboard";

const Mouse = () => {

  const price = 60;

  return (
    <div className="flex">
     <div className="card">Mouse ${price}</div>
     <Keyboard/>
    </div>
  )
}

export default Mouse