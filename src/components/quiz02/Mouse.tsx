
import Keyboard from "./Keyboard";

const Mouse = ({setTotal,total}) => {

  const price = 60;

  const SumarTotal = () => {
    setTotal(total + price);
  }

  return (
    <div className="flex">
     <div className="card" onClick={SumarTotal}>Mouse ${price}</div>
     <Keyboard total={total} setTotal={setTotal}/>  
    </div>
  )
}

export default Mouse