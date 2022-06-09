import React, { useState } from "react";


const Projects = ( category ) => {
  const [repos] = useState([
    {
      name: "Chuck N Go",
      category: "Projects",
      description:
        "his was our Front End Project.  We want to combine the comedy from Chuck Norris jokes with a travel app that also included amenities.  When you first come to the website you will see a joke at the top.  This is coming form a Chuck Norris API.  Now you can go to the map and put in a starting and ending destination.  You can also select the method of travel.  Now on top you can slect the amendities that you want to see on your route",
    },
    {
      name: "Note Taker",
      category: "Contact",
      description:
        "to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    },
    {
      name: "Run Buddy",
      category: "Resume",
      description:
        "A website the matches users to trainers ",
    },
    {
      name: "Work Day Scheduler",
      category: "Resume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Portfolio  Generator",
      category: " Resume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Soccer Quiz",
      category: "Contact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);
  console.log([repos])
  const currentRepo = repos.filter((repo) => repo.category === {category});
  console.log(currentRepo,category)
  return (
    <div>
      <div className="flex-row">
        ({currentRepo.map((image, i) => (
          // <h3>{image.name}</h3>
          <img
            src={require(`../../assets/repo-photos/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
  
        ))}
     
      </div>
    </div>
  );
  
};

export default Projects;

// import React from 'react'

// import photo from '../../assets/repo-photos/Contact/0.jpg';


// function ProjectList() {
//   return (
//     <div>
//         <img
//           src={photo}
//           alt="Commercial Example"
//         />
//     </div>
//   )
// }

// export default ProjectList;
