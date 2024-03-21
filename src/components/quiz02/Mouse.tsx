
import Keyboard from "./Keyboard";

const Mouse = ({ingresar}) => {

  const price = 60;

  return (
    <div className="flex">
     <div className="card">Mouse ${price}</div>
    
     <Keyboard/>
     {ingresar}
    </div>
  )
}

export default Mouse