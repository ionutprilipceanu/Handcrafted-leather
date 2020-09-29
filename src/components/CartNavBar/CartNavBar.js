import React, { Component } from 'react'
import "./CartNavBar.css"



class CartNavBar extends Component {
  
  render() {
    const {cartItems} = this.props;
    return (
      <div className="hole-container-navBar">

        {cartItems.length === 0? 
        (<div className="cart cart-header-navBar">  0  </div>) : 
        (<div className="cart cart-header-navBar">  {cartItems.length} </div>)
        }


      </div>
    )
  }
}

export default CartNavBar
