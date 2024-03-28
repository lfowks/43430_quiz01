import { useContext } from "react";
import { MyContext } from "../../useContext/MyContext";

const Monitor = () => {

  const {total, setTotal} = useContext(MyContext)

  const add = () =>{
    setTotal(price + total);
  }

  const price = 100;
  
  return (
    <div className="card" onClick={add}>Monitor ${price}</div>
  )
}

export default Monitor