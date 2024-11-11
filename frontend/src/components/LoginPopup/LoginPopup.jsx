import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState]=useState('Login')

  return (
    <div>
        <div className="login-popup">
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
                    
                    <input type="email" placeholder='Your email' required/>
                    <input type="password" placeholder='Password' required/>
                </div>
                <button>{currState==='Sign up'?"Create Acoount":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currState==='Login'?<p>Create a new account? <span style={{ color: 'rgb(105, 163, 138)', fontWeight: '500',cursor:'pointer' }} onClick={()=>setCurrState('Sign up')}>Click here</span></p>:   
                <p>Already have an account? <span style={{ color: 'rgb(105, 163, 138)', fontWeight: '500',cursor:'pointer' }} onClick={()=>setCurrState('Login')}>Login here</span></p>}
                
             
            </form>
        </div>
    </div>
  )
}

export default LoginPopup