const ComponentC = ({counterAB, counterC, setCounter}) => {

  return (
    <div className="card">
      C
        <span className='span'>
          {counterC}
        </span>
        <button type="button" onClick={()=> setCounter(counterAB+1)}>CAMBIAR A, B y C</button>
        <br/>
        <button type="button" onClick={()=> setCounter(1)}>RESETEAR TODO</button>
      </div>
  )
}

export default ComponentC