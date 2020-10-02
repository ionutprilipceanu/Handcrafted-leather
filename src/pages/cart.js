import React, { Component } from 'react'
import data from "../data.json"
import Nav_bar from "../components/Nav_bar/Nav_bar"
import Cart from "../components/Cart/Cart"
import Footer from "../components/Footer/Footer"
import "..//pages/style.css"
import store from "..//Store/store"
import { Provider } from "react-redux"


class ShoppingCart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products: data.products,
       size:"",
       sort:"",
       cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    }
  }

  createOrder = (order) => {
    alert("The order has been sent");
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };

 
  
  render() {
    typeof window !== 'undefined' && window.localStorage.getItem("cartItems");
    return (
      <Provider store={store}>
        <div className="box_content">
          <Nav_bar />

            <div className="contentShoppingCart">
              <div className="fullbarShoppingCart">
                <Cart 
                cartItems={this.state.cartItems}  
                removeFromCart={this.removeFromCart} 
                createOrder={this.createOrder}/>
              </div>
            </div>
          
          <Footer />
        </div>
      </Provider>
    )
  }  
}

export default ShoppingCart