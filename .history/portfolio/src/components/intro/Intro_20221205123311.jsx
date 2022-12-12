import React from 'react'
import './intro.scss'
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {init} from 'ityped';
import { useEffect, useRef } from 'react';


const Intro = () => {
  const textRef=useRef();
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1000,
      backSpeed: 50,
      strings: ['Web Development', 'BlockChain Development', 'Data Science ' ] })
  },[])

  

  return (
    <div className='home container-fluid' id='home'>
    <div className="left">
      <div className="imagecontainer">
        <img src="/assets/mypic.jpg" alt="" />
      </div>
    </div>
      <div className="right">
        <div className="wrapper">
          <h2>Heyy!! Happy to see you here</h2>
          <h1>I'm Subram, 2nd Year UG Student at IIT Bombay</h1>
          <h3> A <span ref={textRef}></span> Enthusiast...</h3>
        </div>
        <a href="#portfolio">
         <img src="/assets/arrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro 
