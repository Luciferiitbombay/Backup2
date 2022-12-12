import "./portfolioList.scss"

const PortfolioList = ({title, active, setSelected}) => {
  return (
    <li className={active}>
        {title}
    </li>
  )
}

export default PortfolioList