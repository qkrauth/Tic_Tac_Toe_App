import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

function App() {
  const firstVariable = "This is my string of choice";

  return (
    <div className="App">
      <Square propVar={firstVariable}/>
    </div>
  );
};

export default App;
