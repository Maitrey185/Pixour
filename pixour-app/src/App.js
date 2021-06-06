import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Tech from "./components/Tech";
import About from "./components/About";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Home />
      <Nav />
      <Tech />
      <About />
      <Examples />
    </div>
  );
}

export default App;
