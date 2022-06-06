import React from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Celebrate from "./components/celebrate";
import Gifts from "./components/gifts";
import NewGift from "./components/newGift";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <Celebrate />
      <Gifts />
      <NewGift />
    </div>
  );
}

export default App;
