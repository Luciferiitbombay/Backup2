import React from 'react'
import './intro.scss'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
    <div className="left">
      <div className="imagecontainer">
        <img src="/assets/mypic.jpg" alt="" />
      </div>
    </div>
      <div className="right">
        <div className="wrapper">
          <h2>Happy to see you here!!</h2>
          <h1>I'm Subram, 2nd Year UG Student of IIT Bombay</h1>
          <h3>Web </h3>
        </div>
      </div>
    </div>
  )
}

export default Intro 
