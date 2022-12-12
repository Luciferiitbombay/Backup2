import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro"
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
