
const Keyboard = ({ onClick }: { onClick: () => void }) => {
 
  const price = 90;

  return (
    <div className="card"onClick={onClick}>Keyboard ${price}</div>
  )
}

export default Keyboard