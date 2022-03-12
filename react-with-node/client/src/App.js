import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="../../post" method="post">
          <input type="submit" value="Connect to Node!" />
        </form>
      </header>
    </div>
  );
}

export default App;
