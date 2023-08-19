import React, { useState } from "react";
import { ProjectStyle } from "../components/style";
import { proData } from "../components/projectData";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Projects = () => {
  return (
    <>
      <h1 className="edu-page">
        <span className="edu-deco"></span>Projects
      </h1>
      <div className="project-container">
        {proData.map((proData) => (
          <ProjectStyle key={proData.title}> {/* Add a key here */}
            <h1>{proData.title}</h1>
            <div className="project-wrapper">
              <div className="img-wrapper">
                <img id="temp" alt="describ" src={proData.image} />
                <a
                  className="btn btn-success proButton"
                  href={proData.url}
                  role="button"
                >
                  View Code
                </a>
              </div>
              <div className="content-wrapper">
                <ReadMore>{proData.content}</ReadMore>
              </div>
            </div>
          </ProjectStyle>
        ))}
      </div>
    </>
  );
};

export default Projects;
