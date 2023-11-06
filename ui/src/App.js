import logo from "./logo.svg";
import Picture from "./Components/Picture";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Astronomy Picture Of The Day</p>
        <Picture />
      </header>
    </div>
  );
}

export default App;
