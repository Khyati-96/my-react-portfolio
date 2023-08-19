import React from 'react';
// import axios from "axios";
// import React, {useState, useEffect} from 'react';
import { SkillWrapStyle } from "../components/style";
import { skillsData } from "../components/skillData";

const Skills = () =>{
  /* const [skills, setSkills] = useState([]);
  useEffect(()=>{
      axios.get('https://laravel-tara.herokuapp.com/api/skills')
      .then(response => {
        setSkills(response.data)
      })
  }) */
  return (
      <SkillWrapStyle className="skill-wrapper">
        {skillsData.map(skillsData=> (
        <div className="skill-container">     
          <p><img id="temp" alt="describ" width="100px"src={skillsData.image}/>{skillsData.title}</p>
        </div>
        ))}
      </SkillWrapStyle>
  )
}
export default Skills;