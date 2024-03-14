import { useState } from "react";

const useEffect = () => {
    
    const [contador, setContador] = useState(0);
  
    const increment = () => {
      setContador(contador + 1);
    };

    const reset = () => {
       
        setContador(0);
      };
      
    }