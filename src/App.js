import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">My contacts list📱</h1>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default App;
