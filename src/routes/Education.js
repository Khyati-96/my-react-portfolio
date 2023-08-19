import React from "react";
import Educations from "../components/Educations"
import { EducationStyle } from "../components/style";



function Education() {
  return(
    <main id="main">
      <h1 className="edu-page"><span className="edu-deco"></span>Education</h1>
      <EducationStyle className="card-wrapper">
        <Educations/>
      </EducationStyle>
    </main>
  )
}
export default Education;