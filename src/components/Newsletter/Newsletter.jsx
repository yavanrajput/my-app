
import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusives offers on your Email</h1>
        <p>Subscribe to our Newsletter and stay Updated</p>
        <div>
            <input type="Email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Newsletter
