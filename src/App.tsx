import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Celebrate from "./components/celebrate";
import Gifts from "./components/gifts";
import NewGift from "./components/newGift";
import Message from "./components/message";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      // mirror: true,
      offset: 120,
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <Celebrate />
      <Gifts />
      <NewGift />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
