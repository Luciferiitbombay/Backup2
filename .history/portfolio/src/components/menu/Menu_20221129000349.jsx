import React from 'react'
import "./menu.scss"

const Menu = ({open, setOpen}) => {
  return (
    <div className={"menu " + (open && "active")}> //dont know 
      <ul>
        <li>
            <a href="#intro">HOME</a>
        </li>
        <li>
            <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
            <a href="#testimonials">TESTIMONIALS</a>
        </li>
        <li>
            <a href="#works">WORKS</a>
        </li>
        <li>
            <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
