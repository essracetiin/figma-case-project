import "./App.css";
import "./index.css";
import Navbar from "./components/navbar";
import SectionA from "./components/sectionA";
import SectionB from "./components/sectionB";
import SectionC from "./components/sectionC";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionA />
      <SectionB />
      <SectionC />
    </div>
  );
}

export default App;
