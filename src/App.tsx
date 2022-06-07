import React, { useContext, useEffect } from "react";
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
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { darkmode } = useContext(ThemeContext);

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
    <div className={darkmode ? "dark" : "App"}>
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
