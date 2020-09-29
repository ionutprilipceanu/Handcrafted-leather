import React, {Component} from 'react'
import './Nav_bar.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaHome, FaStoreAlt, FaShoppingCart, FaEnvelope } from "react-icons/fa";
import Link from 'gatsby-link';
import logo from "..//Nav_bar/images/logo.png"
import CartNavBar from "..//CartNavBar/CartNavBar"
import data from "..//..//data.json"




class Nav_bar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      hider: true,
      hiderFalse: false,
      products: data.products,
      size:"",
      sort:"",
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    }
  }
  

  showNavBar () {
    this.setState({
      hider: !this.state.hider, 
      hiderFalse: !this.state.hiderFalse,
    })
  }


  render () {

    return (
      <div className="nav_body">
      
        <div className="logo">
          <Link to="/" className="link" ><img src={logo} alt="Logo"/></Link>
        </div>

        <div>
            {this.state.hider ? 
            <div className="nav-bar ">
              
              <ul className="nav-bar">
                <li>
                  <Link to="/" className="link" activeClassName="activeNav"> <FaHome /> Home</Link>
                </li>
                <li>
                  <Link to="/store" className="link" activeClassName="activeNav"> <FaStoreAlt /> Store</Link>
                </li>
                <li>
                  <Link to="/cart" className="link" activeClassName="activeNav"> <FaShoppingCart /> Cart:
                    <CartNavBar
                      cartItems={this.state.cartItems}
                      
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link" activeClassName="activeNav"> <FaEnvelope /> Contact</Link>
                </li>
                <li><a href="https://www.facebook.com/ionutprilipceanuimage" className="logoFacebook"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
                <li><a href="https://www.facebook.com/ionutprilipceanuimage" className="logoInstagram"> <FontAwesomeIcon icon={faInstagram} /> </a></li>
              </ul>
            </div>
          :
          <div className="nav-barBack ">
            <ul className="nav-bar">
              <li>
                <Link to="/" className="link" activeClassName="activeNav"> <FaHome /> Home</Link>
              </li>
              <li>
                <Link to="/store" className="link" activeClassName="activeNav"> <FaStoreAlt /> Store</Link>
              </li> 
              <li>
                <Link to="/cart" className="link" activeClassName="activeNav"> <FaShoppingCart /> Cart: 
                  <CartNavBar 
                    cartItems={this.state.cartItems}  
                  />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link" activeClassName="activeNav"> <FaEnvelope /> Contact</Link>
              </li>
              <li><a href="https://www.facebook.com/ionutprilipceanuimage" className="logoItem"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
              <li><a href="https://www.facebook.com/ionutprilipceanuimage" className="logoItem"> <FontAwesomeIcon icon={faInstagram} /> </a></li>
            </ul>
          </div>}
        </div>
          
          
        {this.state.hiderFalse ? 
        <div className="backgroundSide">
          <ul className="navSide">
            <li>
              <Link to="/" className="link" activeClassName="activeNav"> <FaHome /> Home</Link>
            </li>
            <li>
              <Link to="/store" className="link" activeClassName="activeNav"> <FaStoreAlt /> Store</Link>
            </li> 
            <li>
              <Link to="/cart" className="link" activeClassName="activeNav"> <FaShoppingCart /> Cart: 

                <CartNavBar 
                    cartItems={this.state.cartItems}  
                />

              </Link>
            </li>
            <li>
              <Link to="/contact" className="link" activeClassName="activeNav"> <FaEnvelope /> Contact</Link>
            </li>
            <li><a href="https://www.facebook.com/ionutprilipceanuimage" className="logoItem"> <FontAwesomeIcon icon={faInstagram} className="logoInstagram"/> <FontAwesomeIcon icon={faFacebook} className="logoFacebook" /></a></li>
          </ul>
          <ul className="navSideSecond">
            <li>Marian Mihalache</li>
            <li>(+40) 751 684 142</li>
            <li>marian.m@gmail.com</li>
          </ul>
        </div>
        :
        <div className="backgroundSideBack" >
            <ul className="navSide">
              <li>
                <Link to="/" className="link" activeClassName="activeNav"> <FaHome /> Home</Link>
              </li>
              <li>
                <Link to="/store" className="link" activeClassName="activeNav"> <FaStoreAlt /> Store</Link>
              </li> 
              <li>
                <Link to="/cart" className="link" activeClassName="activeNav"> <FaShoppingCart /> Cart: 
                  <CartNavBar 
                    cartItems={this.state.cartItems}  
                  />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link" activeClassName="activeNav"> <FaEnvelope /> Contact</Link>
              </li>
            </ul>
            <ul className="navSideSecond">
            <li>Marian Mihalache</li>
            <li>(+40) 751 684 142</li>
            <li>marian.m@gmail.com</li>
            </ul>
        </div>}
    

        <button className="burger" onClick={ () => this.showNavBar()} onKeyDown={ () => this.showNavBar()}>
          <div className="toggle"></div>
          <div className="toggle"></div>
          <div className="toggle"></div>
        </button>
        
      </div>
    )
  }
}  

export default Nav_bar;