import "./portfolioList.scss"

const PortfolioList = ({title, active, setSelected}) => {
  return (
    <li className={active? "portfolio"}>
        {title}
    </li>
  )
}

export default PortfolioList