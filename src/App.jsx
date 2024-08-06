import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased tracking-tight text-gray-400 bg-black">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Skills/>
      <ContactForm/>
      <Footer/>
    </main>
  );
};

export default App;
