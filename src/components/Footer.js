import React from 'react';
import ProfileLinks from "../components/ProfileLinks";
import { FooterStyle } from "../components/style";
import { FaCopyright} from 'react-icons/fa';

function Footer() {
  return(
    <FooterStyle className="footer">
      <div className="footer-copy"><FaCopyright/> 2023 Khyati Sethi.</div>
      <ProfileLinks/>
    </FooterStyle>  
  )
}
export default Footer;