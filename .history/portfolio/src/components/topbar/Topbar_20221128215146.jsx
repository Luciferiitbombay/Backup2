import './topbar.css' 
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="wrapper">
            <div className="left">
                <a href='#intro' className='logo'>PORTFOLIO</a>
                <div className="itemcontainer"></div>
                <AccessibilityNewIcon/><span>2565</span>
                
            </div>
                <div className="itemcontainer"></div>
                <AccessibilityNewIcon/><span>2565</span>

            </div>
            <div className="right">
            Right</div>
        </div>
      
    </div>
  )
}

export default Topbar
