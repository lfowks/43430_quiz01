import  { ReactNode, useState } from 'react'
import { MyContext } from './MyContext'

const MyContextProvider = ({children} : {children: ReactNode}) => {

    const [total, setTotal] = useState(0);



  return (
    <MyContext.Provider value = {{total, setTotal}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider