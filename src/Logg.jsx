import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, } from './Slice'
import { Link, useNavigate } from 'react-router-dom'
import ThemeContext from './ThemeContext'

const Logg = () => {
    const [logindata ,setloginData]=useState('')


  let value=useContext(ThemeContext)
  console.log(value);

const navigate=useNavigate()

  let addToRedux=()=>{
dispatch(addData(logindata))
navigate('/next')
  }
    
    const data=useSelector((state)=>state.logg.data)
    const dispatch=useDispatch()


    let handleChange=(events)=>{
      setloginData({...logindata,[events.target.name]:events.target.value})
    }

       

  return (
    <div>


        


<center>




<h1 className='m-5'>REGISTRATION FORM</h1>
<table>

<tr>

<td><label>First Name</label></td>
<td><input type='text '></input> </td><br /> <br />
</tr>

<tr>
<td><label>Last Name</label></td>
<td><input type='text'></input> </td><br/><br />
</tr>

<tr>
<td><label>Username</label></td>
<td><input  onChange={handleChange}  name='username'   type='text'></input></td><br /><br />
</tr>

<tr>
<td><label>E-mail</label></td>
<td><input  type='e-mail'></input> </td><br /><br />
</tr>


<tr>
<td><label>Password</label> </td>
<td><input onChange={handleChange} name='password' type='password'></input> </td><br /><br />
</tr>

<tr>
<td><label>confirm Password</label> </td>
<td><input type='password'></input> </td><br /><br />
</tr>


</table>

        <button className='m-3' onClick={()=>addToRedux()}>REGISTER</button> 
        <Link to='/next'>next page</Link>

        </center>
    </div>
  )
}

export default Logg