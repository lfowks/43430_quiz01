import { useState } from "react"


const ComponentB = () => {
  const [Value, setValue] = useState(1);

  const increaseValue =() => {
    setValue(Value +1);
  }
   return (
    <div className="card">
      B
        <span className='span'>{Value}
          
        </span>
       <button onClick={increaseValue}>CAMBIAR A Y B</button>
       
      </div>
  );
};

export default ComponentB


//Necesito que cuando toque el button sume en A y en B

