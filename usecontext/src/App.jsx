import { useContext,createContext } from 'react'

function mycontext(){
  const myname = createContext("arjun")
  const value = useContext(myname);
  return(
    <div>
      <h1>Value from context is :{value}</h1>
      <h1>Value from context is :{value}</h1>
    </div>
  )
}

export default mycontext;