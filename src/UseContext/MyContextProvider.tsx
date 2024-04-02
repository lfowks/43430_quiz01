
import { ReactNode, useState } from 'react';
import { MyContext } from './MyContext'

const MyContextProvider = ({children}:{children: ReactNode}) => {
 const [total, setTotal] = useState(0);

 const showConfirm = () =>{
  confirm('SHOW');
 }

 const subTitle = 'SUBTITULO PRODUCTOS';

  return (
    <MyContext.Provider value={{total, setTotal, showConfirm, subTitle}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider