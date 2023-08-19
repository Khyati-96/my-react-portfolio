import React from "react";
import Artworks from "../components/Artworks"
// import { EducationStyle } from "../components/style";



function Artwork() {
  return(
    <main id="main">
      <h1 className="edu-page"><span className="edu-deco"></span>Arts</h1>
      <div className="art-container">
        <Artworks/>
      </div>
    </main>
  )
}
export default Artwork;