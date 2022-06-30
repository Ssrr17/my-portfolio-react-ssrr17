import { portfolios } from "../../assets/data-files/content";
import Button from "react";
import Card from 'react-bootstrap/Card'

const Projects = () => {
  return (
    <>

<div xs={1} md={2} className="container">
  {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="col-lg-4">
          {portfolio.name}
          <div className="card" style={{ width: '50rem' }}>
 
    <div>
      <Card>
        <Card.Img variant="top" src= {portfolio.image} />

        <Card.Body>
          <Card.Title>{portfolio.name}</Card.Title>
          <Card.Text>
          {portfolio.description}
          </Card.Text>
          <a href={portfolio.site} variant="outline-dark" size="sm">
                {portfolio.siteName}
              </a>{" "}
               <a href={portfolio.repo} variant="outline-dark" size="sm">
                {portfolio.repoName}
              </a>
        </Card.Body>
      </Card>
    </div>
  
</div>
</div>
))}
</div> 


    {/* <div xs={1} md={2} className="g-4">
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="col-lg-4">
          {portfolio.name}
          <div className="card" style={{ width: '18rem' }}>
            <img
              variant="top" 
              src={portfolio.image}
              alt={portfolio.altTag}
            />
            </div>
             <article className="card-body">
              <h5 className="card-title">{portfolio.name}</h5>
             <p className="card-text">{portfolio.description}</p>
              <a href={portfolio.site} variant="outline-dark" size="sm">
                {portfolio.siteName}
              </a>{" "}
               <a href={portfolio.repo} variant="outline-dark" size="sm">
                {portfolio.repoName}
              </a>
            </article>
        </div>
      ))}
      </div> */}
      {/* {portfolios.map((portfolio) => (
        
         
           
          </div>
        </div> 
       ))} */}
    </>
  );
};

export default Projects;
