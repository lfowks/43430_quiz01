import { useContext, useEffect } from "react";
import { MyContext } from "../../UseContext/MyContext";

const Total = () => {

  const { total } = useContext(MyContext);
  
  useEffect(() => {
    if(total>=1000){
      confirm('Continue?')
    }
  }, [total])
  
  return (
    <div>Total: $ {total}</div>
  )
}

export default Total