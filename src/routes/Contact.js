import React from "react";
import ContactForm from "../components/ContactForm";
import { SkillStyle,  } from "../components/style";



function Contact() {
  return(
    <main id="main">
      <SkillStyle>
        <h1 className="skill-page"><span className="skill-deco"></span>Contact Me</h1>
        <ContactForm/>
      </SkillStyle>
    </main>
  )
}
export default Contact;