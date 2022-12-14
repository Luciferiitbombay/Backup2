import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList' 
import { useState } from 'react'

const Portfolio = () => {
  const [selected, setSelected]=useState("featured");

const list=[
  {
    id: "featured", title:"Featured",
  },
  {
    id: "web", title:"Web App",
  },
  {
    id: "mobile", title:"Mobile App",
  },
  {
    id: "design", title:"Design",
  },
  {
    id: "content", title:"Content "
  }
]

  return (
    <div className='portfolio' id='portfolio'>
    <h1>Portfolio</h1>
    <ul>
      {list.map(item=>(
        <PortfolioList title={item.title} active={selected==}/>
      ))}
    </ul>      
    <div className="container">
      <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU" alt="" />
        <h3>Banking App</h3>
      </div>
    </div>
    </div>
  )
}

export default Portfolio
