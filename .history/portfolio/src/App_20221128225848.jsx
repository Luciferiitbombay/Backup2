import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";


function App() {
  const [menu, setMenu] =useState(false);

  const open=()=>{
    setMenu(true)
  }


  return (
    <div className="app">
      <Topbar onClick={open}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
