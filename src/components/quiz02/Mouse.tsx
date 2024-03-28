
import { useContext } from "react";
import Keyboard from "./Keyboard";
import { MyContext } from "../../useContext/MyContext";

const Mouse = () => {

  const {total, setTotal} = useContext(MyContext)

  const add = () =>{
    setTotal(price + total);
  }

  const price = 60;

  return (
    <div className="flex">
     <div className="card" onClick={add}>Mouse ${price}</div>
     <Keyboard />
    </div>
  )
}

export default Mouse