import React from 'react'
import './intro.scss'
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Intro = () => {

    // const rotate=()=>{
      
    // }

  return (
    <div className='intro' id='intro'>
    <div className="left">
      <div className="imagecontainer">
        <img src="/assets/mypic.jpg" alt="" />
      </div>
    </div>
      <div className="right">
        <div className="wrapper">
          <h2>Heyy!! Happy to see you here</h2>
          <h1>I'm Subram, 2nd Year UG Student of IIT Bombay</h1>
          <h3> A Web and Blockchain Enthusiast</h3>
        </div>
        <a href="#portfolio" >
         <img src="/assets/arrow.png" alt="" onClick={setClick} />
        </a>
      </div>
    </div>
  )
}

export default Intro 
