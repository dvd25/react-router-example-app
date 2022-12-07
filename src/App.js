import { Route, Routes } from "react-router-dom"
import './App.css';
import About from "./Components/AboutPage";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <h2> Maybe Nav bar can be here</h2>
      <h1> Title</h1>
      <Routes>
        <Route path="/" element= {<Homepage />}/>
        <Route path="/about" element= {<About />}/>
      </Routes>
      <h2> Footer</h2>
    </div>
  );
}

export default App;
