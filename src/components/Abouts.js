import React from 'react';
import { HomeStyle } from "../components/style";
import { aboutData } from "../components/aboutsData"

const Abouts = () => {
  return (
    <>
      {aboutData.map((aboutData) => (
        <HomeStyle className="home-style" key={aboutData.id}>
          <div className="portraitWrapper">
            <img id="portrait1" src={aboutData.image} alt="a portrait of Khyati Sethi" />
            <div className="portrait2"></div>
          </div>
          <div className="title-container">
            <h1 className="title">
              Hello! <br />
              My name is Khyati! <br />
              I am a 
              <div className="rotate-words">
                <span className="title-card1">Web developer.</span>
                <span className="title-card2">team player.</span>
                <span className="title-card3">creative thinker.</span>
              </div>
            </h1>
            <h2><span className="about-deco"></span> A bit about me</h2>
            <p>{aboutData.content}</p>
          </div>
        </HomeStyle>
      ))}
    </>
  );
}

export default Abouts;
