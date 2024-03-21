
import Keyboard from "./Keyboard";

const Mouse = ({ onClick }: { onClick: () => void }) => {

  const price = 60;

  return (
    <div className="flex">
     <div className="card"onClick={onClick}>Mouse ${price}</div>
     <Keyboard onClick={onClick}/>
    </div>
  )
}

export default Mouse