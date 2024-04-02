import { useContext } from "react";
import { MyContext } from "../../UseContext/MyContext";

const Keyboard = () => {
 
  const { total, setTotal, subTitle} = useContext(MyContext);
  
  const price = 90;

  return (
    <><h2>{subTitle}</h2>
    <div onClick={()=>setTotal(total+price)} className="card">Keyboard ${price}</div></>
  )
}

export default Keyboard