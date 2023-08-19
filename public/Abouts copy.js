// import axios from "axios";
// import React, {useState, useEffect} from 'react';
import React from 'react';
import { HomeStyle } from "../components/style";
import { aboutData } from "../components/aboutsData"
import portrait from "/src/components/img/IMG_3057.jpg"

const Abouts = () =>{
 /*    const [abouts, setAbouts] = useState([]);
    useEffect(()=>{
        axios.get('./')
        .then(response => {
            setAbouts(response.data)
        })
    }) */
    return (
        <div>
            {aboutData.map(aboutData=> (
            <HomeStyle className="home-style">
                <div className="portraitWrapper">
                    <img id="portrait1" src={aboutData.image}  alt="a portrait of Tara Lai"/>
                    {/* <img id="portrait2" alt="a portrait of Tara Lai" src={portrait}/> */}
                </div>
                <div className="portrait2">
               {/*  <img id="portrait2" alt="a portrait of Tara Lai" src={portrait}/> */}
                </div>
                <p className="title">
                    Hi, My name is Tara! <br />
                    I am a 
                    <div className="rotate-words">
                        <span className="title-card1"> Web developer.</span>
                        <span className="title-card2"> team player.</span>
                        <span className="title-card3"> concert enthusiast.</span>
                    </div>
                </p>
                {/* <p>{aboutData.content}</p> */}
            </HomeStyle>
            ))}
        </div>
    )
}
export default Abouts;