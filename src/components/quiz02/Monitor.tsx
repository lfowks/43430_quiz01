
const Monitor = ({total,setTotal}) => {

  const price = 100;

  const SumarTotal = () => {
    setTotal(total + price);
  }
  
  return (
    <div className="card" onClick={SumarTotal}>Monitor ${price}</div>
  )
}

export default Monitor