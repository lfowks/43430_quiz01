import { useContext } from "react";
import { MyContext } from "../../UseContext/MyContext";

const Monitor = () => {

  const { total, setTotal} = useContext(MyContext);
  
  const price = 100;
  
  return (
    <div onClick={()=>setTotal(total+price)} className="card">Monitor ${price}</div>
  )
}

export default Monitor