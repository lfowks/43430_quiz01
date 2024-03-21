
import { useEffect } from "react";
import Keyboard from "./Keyboard";

const Mouse = () =>  {
  const[quantity, setQuantity]= useState(0);
  const price = 60;
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
useEffect([]) => {

}
  return (
    <div className="flex">
     <div className="card">Mouse ${price}</div>
     <Keyboard/>
    </div>
  )
}

export default Mouse