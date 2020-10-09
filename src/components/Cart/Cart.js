import React, { Component } from 'react'
import formatCurrency from "../Util/Util";
import Fade from "react-reveal/Fade";
import "./Cart.css"


class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      address: "",
      email: "",
      showCheckout: false
    }
  }

  handleInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createOrder = (e)  =>{
    //e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    }
    this.props.createOrder(order);
  }
  

  render() {
    const {cartItems} = this.props;
    return (
      <div className="hole-container">

        {cartItems.length === 0? 
        (<div className="cart cart-header-space"> Cart is emtpy </div>) : 
        (<div className="cart cart-header"> You have {cartItems.length} in the cart {" "}</div>)
        }

        <div>
          <div className="cart">
           <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) =>(
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div>{formatCurrency(item.price)} x {item.count}</div>
                      <div className="right">
                        <button className="button_primary_btn" onClick={() => this.props.removeFromCart(item)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !==0 && (
            <div>
            <div className="cart-total">
              <div className="total">
                <div>
                  Total: {" "}
                  {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0))}
                </div>
                <button onClick={() => this.setState({showCheckout: true})} className="button_primary_btn_total" > Proceed </button>
              </div>
            </div>
            {this.state.showCheckout && (
              <Fade right cascade>
              <div className="cartForm">
              <form onSubmit={this.createOrder}
                method="post" 
                data-netlify-honeypot="bot-field" 
                data-netlify="true" 
                name="contact" 
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <ul className="form-container">
                  <li>
                    <label htmlFor="name">Name:
                    <input id="name-input" type="text" name="name" placeholder="Full name" required onChange={this.handInput}></input>
                    </label>
                  </li>
                  <li>
                  <label htmlFor="name">Name:
                    <input id="name-input" type="text" name="name" placeholder="Full name" required onChange={this.handInput}></input>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="address">Address: 
                    <input id="address-input" type="text" name="address" placeholder="Delivery address" required onChange={this.handInput}></input>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="phone">Phone: 
                    <input id="phone-input" type="text" name="phone" placeholder="Phone number" required onChange={this.handInput}></input>
                    </label>
                  </li>
                  <li>
                    <button className="button_primary_btn_checkout" type="submit" variant="primary" >Checkout</button>
                  </li>
                </ul>
              </form>
              </div>
              </Fade>
            )}
            </div>
          )}    
        </div>
        
      </div>
    )
  }
}

export default Cart
