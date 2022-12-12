import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import  from "./components/testimonials/Testimonials"
import Intro from "./components/works/Works"
import Intro from "./components/contact/Contact"


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>

      </div>
    </div>
  );
}

export default App;
