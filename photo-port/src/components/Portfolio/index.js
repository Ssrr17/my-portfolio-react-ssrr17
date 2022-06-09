import React from 'react';
import Projects from '../Projects';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PageContent from '../PageContent'
import Contact from '../Contact'

function Portfolio (props) {
  const { currentCategory } = props;

  const render = () => {
    switch(currentCategory.name){
        case 'Projects':
            return <Projects/>
        case 'Contact':
            return <Contact/>
            // case 'Resume':
          //  return <Contact/>
        default:
            return
    }
  }
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {/* <Projects category={currentCategory.name} /> */}

      <PageContent>{render()}</PageContent>
      
    </section>
  );
}
export default Portfolio;