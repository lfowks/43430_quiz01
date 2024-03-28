
import React from 'react'

type MyContextType = {
    total: number,
    setTotal: (total : number) => void
}

export const MyContext = React.createContext<MyContextType>({
        total: 0,
        setTotal: () =>{}
    });


