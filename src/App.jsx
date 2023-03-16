import React from "react";

// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

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
        <Route path="/work/:id" exact element={<MovieDetail />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
