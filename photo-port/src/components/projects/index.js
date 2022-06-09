import { portfolios } from "../../assets/data-files/content";
import Button from "react";

const Projects = () => {
  return (
    <>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="col-lg-4">
          {portfolio.name}
          <div className="card mb-3">
            <img
              className="card-img-top img-fluid"
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
      {/* {portfolios.map((portfolio) => (
        
         
           
          </div>
        </div> 
       ))} */}
    </>
  );
};

export default Projects;
