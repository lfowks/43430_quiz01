

const ComponentB = ({counter, setCounter}) => {
  return (
    <div className="card">
      B
        <span className='span'>
          {counter}
        </span>
        <button type="button" onClick={()=>setCounter(counter+1)}>CAMBIAR A Y B</button>
      </div>
  )
}

export default ComponentB