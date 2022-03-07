import "./App.css";
import Resistor from "./Resistor/Resistor";

function App() {
  return (
    <>
      <header>
        <h1>Real-Time Resistor Calculator</h1>
        <h4>A ReactJS Web App by Bryce Tuppurainen</h4>
        <hr />
      </header>
      <main>
        <Resistor />
      </main>
    </>
  );
}

export default App;
