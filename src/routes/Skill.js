import React from "react";
import Skills from "../components/Skills"
import { SkillStyle,  } from "../components/style";



function Skill() {
  return(
    <main id="main">
      <SkillStyle>
        <h1 className="skill-page"><span className="skill-deco"></span> Skills</h1>
        <Skills/>
      </SkillStyle>
    </main>
  )
}
export default Skill;