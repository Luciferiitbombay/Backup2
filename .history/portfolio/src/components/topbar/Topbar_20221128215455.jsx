import './topbar.css' 
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const Topbar = () => {
  return (
    <div className='topbar'>

        <div className="wrapper">
    
            <div className="left">
    
                <a href='#intro' className='logo'>PORTFOLIO</a>
                <div className="itemcontainer"></div>
                <ConnectWithoutContactIcon/><span>2565</span>
                </div>
         
                <div className="itemcontainer"></div>
                <MarkEmailReadIcon/><span>subram.iitb@gmail.com</span>
                </div>
            <div className="right">
            Right</div>
        </div>
      
    </div>
  )
}

export default Topbar
