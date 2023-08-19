import React from 'react';
// import axios from "axios";
// import React, {useState, useEffect} from 'react';
import { eduData } from "../components/educationData";
// import { EducationStyle } from "../components/style";

const Educations = () =>{
  /* const [educations, setEducations] = useState([]);
  useEffect(()=>{
      axios.get('./educationData.json')
      .then(response => {
        setEducations(response.data)
      })
  }) */
  return (
      <div className="card_container">
        {eduData.map(eduData=> (
        <article className="card">
          <img alt="temp" src={eduData.image} /> 
          <div className="eduWrapper card_content">
            <h1 className="card_title">{eduData.institution_name}</h1>
            <span className="card_subtitle">{eduData.degree}</span>
            <p className="card_course">{eduData.course_name}</p>
          </div>
        </article>
        ))}
      </div>
  )
}


export default Educations;

