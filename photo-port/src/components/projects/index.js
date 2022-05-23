import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from '../../assets/images/runbud.jpeg'

function Projects(props) {

  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {/* <PhotoList category={currentCategory.name} /> */}
    </section>
  );



//   const currentCategory = {
//     name: "Projects",
//     description:
//       "A website that offers fitness training services",
//   };
//   return (
//     <section>
//     <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
//     <p>RUN-BUDDY</p>
//     <div className="flex-row">
//     <img
//             src={photo}
//             alt="running"
//             className="img-thumbnail mx-1"
//           />
//     </div>
//   </section>
//   );
}


 export default Projects;




