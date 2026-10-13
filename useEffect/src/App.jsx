import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData,setformData] = useState({
    name:"",
    email:"",
    password:""
  });
  useEffect(()=>{
    console.log("form Data update",formData);
  },[formData])
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("registration succesfull");
    console.log(formData);
  }
  return (
    <div>
      <form action="">
        <input type="text" name='name'placeholder='Enter Your name' value={formData.name} onChange={handleSubmit} />
        <br />
        <input type="email" name='email'placeholder='Enter your email' value={formData.email} onChange={handleSubmit} />
        <br />
        <input type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handleSubmit}/>    
        <br />
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App