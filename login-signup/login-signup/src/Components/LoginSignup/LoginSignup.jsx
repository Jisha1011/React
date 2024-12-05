import React, { useState } from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_iconf from '../Assets/person.png'
 const LoginSignup = () => {
    const[action,setAction] = useState("SignUp")
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>
                {action}
            </div>
            <div className='underline'>

            </div>
            {action==="Login"?<div></div>:<div className='inputs'>
                <img src={person_iconf} alt=''></img>
                <input type='text' placeholder='Name'/>
            </div>}
            
            <div className='inputs'>
                <img src={email_icon}  alt=''></img>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='inputs'>
                <img src={password_icon}  alt=''></img>
                <input type='password' placeholder='Password'/>
            </div>
            {action==="SignUp"?<div></div>:<div className="forgot-password">
                Lost Password? <span>Click Here</span>
            </div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"}onClick={()=>setAction("SignUp")}>
                    SignUp
                </div>
                <div className={action==="SignUp"?"submit gray":"submit"}onClick={()=>setAction("Login")}>
                    Login
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default LoginSignup