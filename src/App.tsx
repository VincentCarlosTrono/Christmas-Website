import React, { useContext, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Celebrate from "./components/Celebrate";
import Gifts from "./components/Gifts";
import Message from "./components/Message";
import Footer from "./components/Footer";
import { ThemeContext } from "./ContextAPI/ThemeContext";
import NewGifts from "./components/NewGifts";

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
      <NewGifts />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
