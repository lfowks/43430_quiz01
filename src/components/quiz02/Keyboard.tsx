import { useContext } from "react";
import { MyContext } from "../../useContext/MyContext";

const Keyboard = () => {
 
  const {total, setTotal} = useContext(MyContext)

  const price = 90;

  const add = () =>{
    setTotal(price + total);
  }


  return (
    <div className="card" onClick={add}>Keyboard ${price}</div>
  )
}

export default Keyboard