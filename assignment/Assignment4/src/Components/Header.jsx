import React from 'react'

const Header = () => {
  return (
    <div style={{border:"1px solid blue",alignItems:"flex-start",gap:"0px",margin:"30px"}}>
        <div style={{height:"50px",display:"flex",margin:"0",padding:"0px",justifyContent:"space-between"}}>
        <h1><a href="#Home"style={{fontSize:"30px",color:"red"}}>Home</a></h1>
        <h1><a href="#Home"style={{fontSize:"30px",color:"red"}}>About us</a></h1>
        <h1><a href="#Home" style={{fontSize:"30px",color:"red"}}>Phone no</a></h1>
        </div>
    </div>
    
  )
}

export default Header