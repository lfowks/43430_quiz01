import { useEffect,  } from "react";

const Total = ({total,setTotal}) => {


  useEffect( () => {
    setTotal(total)
  }),[total]

  useEffect(()=>{
    if(total >= 1000){
      const Continuar = confirm("se ha pasado del limite de $1000")
      alert(Continuar);
    } 
  })


  return (
    <div>Total: ${total}</div>
  )
}

export default Total