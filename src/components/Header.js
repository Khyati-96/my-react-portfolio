import React from "react";
import Nav from "./Nav";
import { NavHeaderStyle } from "../components/style";

class Header extends React.Component {

  render() {
    return( 
      <NavHeaderStyle id="header">
        <h2 id="site-name"><a href="/">Khyati Sethi</a></h2>
        <Nav />          
      </NavHeaderStyle>
    );
  }
}
export default Header;