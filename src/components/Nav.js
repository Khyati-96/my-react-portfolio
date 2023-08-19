import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { NavList } from "../components/style";
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { VStack } from '@chakra-ui/layout';


function Nav() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return(
    <nav id="main-navigation" aria-label="Main navigation">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <NavList>
          <NavLink to="/" activeClassName="active" className="nav-links" onClick={handleClick}>About</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/skill" activeClassName="active" className="nav-links2" onClick={handleClick}>Skills</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/education" activeClassName="active" className="nav-links" onClick={handleClick}>Education</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/project" activeClassName="active" className="nav-links2" onClick={handleClick}>Projects</NavLink>
        </NavList> 
        <NavList>
          <NavLink to="/art" activeClassName="active" className="nav-links2" onClick={handleClick}>Arts</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/contact" activeClassName="active" className="nav-links2" onClick={handleClick}>Contact Me</NavLink>
        </NavList>  
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  )
}
export default Nav;



/////////////////// TEST ///////////////////////
// function Navigation() {
//   return(
//     <Navbar id="main-navigation" aria-label="Main navigation">
//       <Container>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse aria-label=" responsive-navbar-nav">
//           <Nav>
//             <Nav.Link to="/">Home</Nav.Link>   
//             <Nav.Link to="/skill">Skill</Nav.Link>      
//             <Nav.Link to="/education">Education</Nav.Link>
//             <Nav.Link to="/project">Project</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }
// export default Navigation;