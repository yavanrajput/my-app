import React from 'react'
import './Css/Loginsignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">

          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your email address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing , i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
