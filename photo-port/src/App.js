import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

import Nav from "./components/Nav";
import MyProfile from "./components/my-profile";
import Contact from "./components/contact";
import Projects from "./components/projects";

// "my profile" "projects" "contact"

function App() {
  const [selectedPage, setSelectedPage] = useState("my profile");
 
  return (
    <div>
      <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Nav>
      <main>
        {selectedPage === "my profile" && <MyProfile />}
        {selectedPage === "contact" && < Contact />}
        {selectedPage === "projects" && < Projects />}
      </main>
    </div>
  );
}

export default App;
