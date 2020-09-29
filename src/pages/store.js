import React, { Component } from 'react'
import data from "../data.json"
import Nav_bar from "../components/Nav_bar/Nav_bar"
import Cart from "../components/Cart/Cart"
import Filter from '../components/Filter/Filter'
import Products from '../components/Products/Products'
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
  
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
      .slice()
      .sort((a,b) =>
        sort === "Lowest" ?
        a.price > b.price ? 1: -1 :
        sort === "Highest" ? 
        a.price < b.price ? 1: -1 :
        a._id > b._id ? 1: -1
      )
    }))
  };

  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
      return (
        <Provider store={store}>
      <div className="box_content">
        <Nav_bar />

          <div className="contentShoppingCart">
            <div className="mainShoppingCart">
              
              <Filter count={this.state.products.length} 
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}>
              </Filter>

              <Products 
                className="productsStore"
                products={this.state.products} 
                addToCart={this.addToCart}> 
              </Products>

            </div>

            <div className="sidebarShoppingCart">
              <Cart 
                cartItems={this.state.cartItems}  
                removeFromCart={this.removeFromCart} 
                createOrder={this.createOrder}>
              </Cart>
            </div>

          </div>
        
        <Footer />
      </div>
      </Provider>
    )
  }  
}

export default ShoppingCart