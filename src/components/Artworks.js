// import axios from "axios";
// import React, {useState, useEffect} from 'react';
import React from "react";
// import { ProjectStyle } from "../components/style";
import { artsData } from "../components/artData";
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
// import { Button } from '@chakra-ui/react'
// import { FaEdge , FaMap } from "react-icons/fa"



const Artworks = () =>{
 
    return (
        <>
            <div className="art-container">
                {artsData.map(artsData=> (
                    <div className="row"> 
                        <div className="column">  
                            <div className="artImg-wrapper">
                                <img id="temp" alt="describ" width="10%" src={artsData.image}/>
                                <h1 className="img-title">{artsData.type}</h1>
                                {/* <a className="btn btn-success proButton" href={artData.url} role="button">View Code</a> */}
                            </div>
                        </div> 
                        <div className="column">  
                            <div className="artImg-wrapper">
                                <img id="temp" alt="describ" width="10%" src={artsData.second.image}/>
                                <h1 className="img-title">{artsData.second.type}</h1>
                                {/* <a className="btn btn-success proButton" href={artData.url} role="button">View Code</a> */}
                            </div>
                        </div>
                        <div className="column">  
                            <div className="artImg-wrapper">
                                <img id="temp" alt="describ" width="10%" src={artsData.third.image}/>
                                <h1 className="img-title">{artsData.third.type}</h1>
                                {/* <a className="btn btn-success proButton" href={artData.url} role="button">View Code</a> */}
                            </div>
                        </div>          
                    </div>
                ))}
            </div>
        </>
    )
}
export default Artworks;