import { useEffect, useState } from "react"

const TestEffect = () => {

 const [myVariable, setMyVariable] = useState(0);

  //LOAD
  useEffect(() => {    
    console.log('SE EJECUTÓ EL LOAD');  
  }, [])
  
 //UPDATE
 useEffect(() => {    
    console.log('VARIABLE AUMENTó ' + myVariable);
  }, [myVariable])

  const handleClick = () => {
    setMyVariable(myVariable + 1);
  };

  return (
    <div><h2>Test Effect {myVariable}</h2>
    <button type="button" onClick={handleClick}> ++ </button></div>
  )
}

export default TestEffect