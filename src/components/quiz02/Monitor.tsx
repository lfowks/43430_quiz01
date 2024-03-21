
const Monitor = ({counter, setCounter}) => {

  const add = () =>{
    setCounter(price + counter);
  }

  const price = 100;
  
  return (
    <div className="card" onClick={add}>Monitor ${price}</div>
  )
}

export default Monitor