import "./portfolioList.scss"

const PortfolioList = ({title, active, setSelected}) => {
  return (
    <li className="portfolioList">
        {title}
    </li>
  )
}

export default PortfolioList