
const Monitor = ({ onClick }: { onClick: () => void }) => {

  const price = 100;
  
  return (
    <div className="card"onClick={onClick}>Monitor ${price}</div>
  )
}

export default Monitor