import React from "react";

// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";

// Global Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
