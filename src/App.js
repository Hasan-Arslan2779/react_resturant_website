import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Menu from "../src/pages/Menu";
import Pagenotfound from "../src/pages/Pagenotfound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
