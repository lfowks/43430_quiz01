import { useContext } from "react";
import { MyContext } from "../../UseContext/MyContext";

const Mouse = () => {

  const { total, setTotal, showConfirm } = useContext(MyContext);
   
  const price = 60;

  return (
    <div className="flex">
     <div onClick={()=>setTotal(total+price)} className="card">Mouse ${price}</div>

     <button onClick={showConfirm}>SHOW</button>
    </div>
  )
}

export default Mouse