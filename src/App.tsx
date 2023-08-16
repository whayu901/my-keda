import React from "react";
import "./App.css";
import Header from "./root/components/Header";
import Hero from "./root/components/Hero";
import About from "./root/components/About";
import Pricing from "./root/components/Pricing";
import Footer from "./root/components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
