// import React from 'react'
import "./contact.scss"

const Contact = () => {
  const handleSubmit=()
  return (
    <div className='contact' id="contact">
      <div className="left">
        
        <img src="/assets/shake.svg" alt="" />

      </div>
      <div className="right">
        <h2>CONTACT</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="email" id="email" />
          <textarea placeholder="Message" name="text" id="text" cols="30" rows="10"></textarea>
          <button type="submit">Send</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
