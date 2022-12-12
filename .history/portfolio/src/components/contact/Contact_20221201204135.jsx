// import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="/assests/shake.svg" alt="" />

      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Email" name="email" id="email" />
          <textarea placeholeder="Message" name="text" id="text" cols="30" rows="10"></textarea>
          <button type="">Send</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
