import "./App.css";
import Footeruser from "./components/Footeruser";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";

function App() {
  return (
    <div className="App">
      <Navbar title="Text-Analyzer" />
      <Textform heading="Enter your text to analyze" />
      <Footeruser />
    </div>
  );
}

export default App;
