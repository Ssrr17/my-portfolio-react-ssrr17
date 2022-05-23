import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

import Nav from "./components/Nav";
import About from "./components/About";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";

function App() {
  const [categories] = useState([
    {
      name: 'Projects',
      description: 'here are a few of my projects',
    },
    { name: 'contact', description: 'Portraits of people in my life' },
    { name: 'resume', description: 'Delicious delicacies' },
    
  ]);

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
          {/* <Contact></Contact>
          <Projects></Projects> */}
          <About></About>

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
