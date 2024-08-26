import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./mycomponents/Navbar";
import Home from "./Mycomponents/Home";
import Info from "./Mycomponents/Info";
import "./App.css";
import Navbar from "./Mycomponents/Navbar";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
