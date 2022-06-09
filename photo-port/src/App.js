import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

import Nav from "./components/Nav";
import About from "./components/About";

import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Resume from "./components/"

function App() {
  const categories = [
    { name: "About" },

    {
      name: "Projects",
      description: "here are a few of my projects",
    },
    { name: "Contact", description: "Portraits of people in my life" },
    { name: "Resume", description: "Delicious delicacies" },
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
          <About></About>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;

// "my profile" "projects" "contact"

// function App() {
//   const [selectedPage, setSelectedPage] = useState("my profile");

//   return (
//     <div>
//       <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Nav>
//       <main>
//         {selectedPage === "my profile" && <About />}
//         {selectedPage === "contact" && < Contact />}
//         {selectedPage === "projects" && < Projects />}
//       </main>
//     </div>
//   );
// }

// export default App;
