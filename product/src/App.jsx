import React from 'react'
import Product from './Components/Product'

const App = () => {
  return (
    <div>
      <div style={{display:'flex',justifyContent:"space-around",border:"4px solid black"}}>
        <button onClick={<Product></Product>}>Hello</button>
      </div>
    </div>
  )
}

export default App