import React from "react";

function Nav({setSelectedPage}) {
    const categories = [
        {
         name : "my profile",
         description: "Who am I? "
        },
        {
          name: "projects",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "contact", description: "you can reach me" },
        
        
      ];
   
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          
          {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick= {() => setSelectedPage(category.name)}>
            {category.name}
          </span>
        </li>
      ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
