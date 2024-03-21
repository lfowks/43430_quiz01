
import Keyboard from "./Keyboard";

const Mouse = ({counter, setCounter}) => {

  const add = () =>{
    setCounter(price + counter);
  }

  const price = 60;

  return (
    <div className="flex">
     <div className="card" onClick={add}>Mouse ${price}</div>
     <Keyboard counter={counter} setCounter={setCounter}/>
    </div>
  )
}

export default Mouse