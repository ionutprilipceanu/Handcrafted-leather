import React from 'react'
import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'gatsby-link';

function Footer() {
  return (
    <div className="footer">
      <ul className="componenteDesktop">
        <li> <Link to="/politicaCookie">Cookie policy</Link></li>
        <li> <Link to="/politicaConfidentialitate">Privacy policy</Link></li>
        <li> <Link to="/termeniConditii">Terms and conditions</Link></li>
        <p>&copy;Iași România 2020</p>
      </ul>

       <ul className="logoItemsDesktop">
        <li><a href="https://www.facebook.com/mih.marian86" target="_blank" rel="noreferrer" className="logoItemDesktop"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
        <li><a href="https://www.facebook.com/mih.marian86" target="_blank" rel="noreferrer" className="logoItemDesktop"> <FontAwesomeIcon icon={faInstagram} /> </a></li>
      </ul> 

      <ul className="componentePhone">
        <li> <Link to="/politicaCookie">Cookie policy</Link></li>
        <li> <Link to="/politicaConfidentialitate">Privacy policy</Link></li>
        <li> <Link to="/termeniConditii">Terms and conditions</Link></li>
      </ul>

       <ul className="logoItemsPhone">
        <li><a href="https://www.facebook.com/mih.marian86" target="_blank" rel="noreferrer" className="logoItemPhone"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
        <p>&copy;Iași România 2020</p>
        <li><a href="https://www.facebook.com/mih.marian86" target="_blank" rel="noreferrer" className="logoItemPhone"> <FontAwesomeIcon icon={faInstagram} /> </a></li>
      </ul> 
    </div>
  )
}

export default Footer
