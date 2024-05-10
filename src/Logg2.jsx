import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Logg2 = () => {
  const [loginsdata,setLoginsData]=useState()

  let handleChange=(event)=>{
    setLoginsData({...loginsdata,[event.target.name]:event.target.value})
    console.log(loginsdata);
  }
    const data=useSelector((state)=>state.logg.data)

    let check=()=>{
    if (loginsdata.username==data.username && loginsdata.password==data.password) {
      alert('hi')
    }
    else{
      alert('sorry')
    }
  }
  return (
    <div>

<div className="b">
      <center>
        <h3 className='m-5'>LOGIN FORM</h3>
        {data.Username}
        {data.Password}

        
    
        <form>
           <label>Username</label><br />
            <input onChange={handleChange}  type="text" name='username'/><br /><br />
           
            <label>Password</label><br />
            <input onChange={handleChange} type="password"name='password' /><br /><br />
           
            <button type='button' onClick={check}>Login</button>
            <button>forget password</button>
        </form>
        </center>
    </div>
    </div>
  )
}

export default Logg2