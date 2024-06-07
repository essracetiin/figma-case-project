import "./App.css";
import "./index.css";
import Navbar from "./components/navbar";
import SectionA from "./components/sectionA";
import SectionB from "./components/sectionB";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionA />
      <SectionB />
    </div>
  );
}

export default App;
