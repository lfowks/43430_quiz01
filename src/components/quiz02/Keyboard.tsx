
const Keyboard = ({total,setTotal}) => {
 
  const price = 90;

  const SumarTotal = () => {
    setTotal(total + price);
  }

  return (
    <div className="card" onClick={SumarTotal}>Keyboard ${price}</div>
  )
}

export default Keyboard