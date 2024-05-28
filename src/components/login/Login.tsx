import React from 'react'
import "./login.scss"
export default function Login() {
  return (
    /* muốn dùng scss thì phải cai npm i sass */
    <div className='Login'>Login
        <div className='login-name'>
           <label htmlFor=''>userName</label>
           <input className='login-name__input' type='text'/> <br/>
        </div>
        <div className='login-pass'>
            <label htmlFor=''>password</label>
            <input type='text'/>
        </div>
        <button>Login</button>
    </div>
  )
}
