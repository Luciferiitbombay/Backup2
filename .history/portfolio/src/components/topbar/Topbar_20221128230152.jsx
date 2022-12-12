import "./topbar.css";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useState } from "react";

const Topbar = () => {
  const [menu, setMenu] =useState(false);
  const open=()=>{
    setMenu(true);
  }
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo ">
            PORTFOLIO
          </a>
          <div className="itemcontainer">
            <ConnectWithoutContactIcon className="icon" />
            <span>+91-9365041445</span>
          </div>

          <div className="itemcontainer">
            <MarkEmailReadIcon className="icon" />
            <span>subram.iitb@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={open}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
