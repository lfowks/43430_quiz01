const ComponentA = (
  {
    NumberToShow,
    setMyNumber
  }:
  {
    textToShow: string,
    setMyNumber:(text: string) => void
  }) => {

  const actualizar = () => {
    setMyNumber('1')
  }
    
  return (
    <div className="card">
      A
        <span className='span'>
          1
        </span>
      </div>
  )
}

export default ComponentA