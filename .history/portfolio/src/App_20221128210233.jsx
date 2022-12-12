import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Intro from "./components/testimonials/Testimonials"
import Intro from "./components/works/Works"
import Intro from "./components/Works"


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
