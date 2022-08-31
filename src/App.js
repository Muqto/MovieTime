import Preview from "./Components/Preview/Preview";
import Home from "./Components/Home/Home";
import Plans from "./Components/Plans/Plans";
import Recall from "./Components/Recall/Recall";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Preview/>
      <Plans/>
      <Recall/>
      <Footer/>
    </div>
  );
}

export default App;
