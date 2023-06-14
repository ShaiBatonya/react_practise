import { useEffect } from "react"


function Counter({amount}) {

    useEffect(()=>{

        return ()=>{
            console.log("removed me from the DOM !!!")
        }
    })
  return (
    <h1 >the products in the store are : {amount}</h1>
  )
}

export default Counter