import React from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Celebrate from "./components/celebrate";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <Celebrate />
    </div>
  );
}

export default App;
