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
  const handelChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div>
      <form action="">
        <input type="text" name='name'placeholder='Enter Your name' value={formData.name} onChange={handelChange} />
        <br />
        <input type="email" name='email'placeholder='Enter your email' value={formData.email} onChange={handelChange} />
        <br />
        <input type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handelChange}/>    
        <br />
        <button type='submit' onClick={handleSubmit}>Registration</button>
      </form>
    </div>
  )
}

export default App