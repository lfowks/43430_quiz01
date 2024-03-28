import { useContext, useEffect } from "react"
import { MyContext } from "../../useContext/MyContext"

const Total = () => {

  const {total} = useContext(MyContext)

  useEffect(() => {
    if(total >= 1000){
    confirm('Se paso mi pana')
    }
  }, [total])

  return (
    <div>Total: {total}</div>
  )
}

export default Total