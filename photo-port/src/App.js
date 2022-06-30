import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

import Nav from "./components/Nav";
import About from "./components/About";

import Footer from "./components/Footer";
// import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
 import Resume from "./components/Resume"

function App() {
  const categories = [
    { name: "About" },

    {
      name: "Projects",
      description: "here are a few of my projects",
    },
    { name: "Contact", description: "Portraits of people in my life" },
    { name: "Resume", description: "Resume" },
  ];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>

          {currentCategory.name==="Projects" && <Projects />}
          {currentCategory.name==="Contact" && <Contact />}
          {currentCategory.name==="Resume" && <Resume />}
          <About></About>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;


