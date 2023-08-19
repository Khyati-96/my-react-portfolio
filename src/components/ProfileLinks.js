import React from 'react';
// import axios from "axios";
// import React, {useState, useEffect} from 'react';
//import { FooterLinkStyle } from "../components/style";
import { linkData } from "../components/profilelinkData";


const ProfileLinks = () =>{
    /* const [profileLinks, setProfileLinks] = useState([]);
    useEffect(()=>{
    axios.get('https://laravel-tara.herokuapp.com/api/profileLinks')
    .then(response => {
        setProfileLinks(response.data)
    }) 
}) */
return (
    <div className="footerList">
        {linkData.map(linkData=> (   
            <ul>
                <li>
                    <a href={linkData.url}>
                        <img id="temp" className="footer-icon" alt="portrait of Tara Lai" width="50px"src={linkData.image}/>
                        <span className="footer-name">{linkData.name}</span>
                    </a>
                </li>
            </ul>
        ))}
    </div>
)}
export default ProfileLinks;