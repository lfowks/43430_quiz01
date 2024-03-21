
const Keyboard = ({counter, setCounter}) => {
 
  const price = 90;

  const add = () =>{
    setCounter(price + counter);
  }


  return (
    <div className="card" onClick={add}>Keyboard ${price}</div>
  )
}

export default Keyboard