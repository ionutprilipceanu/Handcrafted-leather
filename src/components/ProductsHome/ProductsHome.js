import React, { Component } from 'react'
import formatCurrency from "../util/Util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import "..//ProductsHome/ProductsHome.css";



class ProductsHome extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      product: null,
    }
  }

  UNSAFE_componentWillMount() {
    Modal.setAppElement('body');
  };

  openModal = (product) =>{
    this.setState({product});
  };

  closeModal = () =>{
    this.setState({product:null});
  }

  render() {
    //console.log(this.props);
    const {product} = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <h1>Best seller</h1>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className="productsHome" >
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.image} alt={product.title}></img>
                      <p>{product.title}</p>
                    </a>
                    <div className="product-priceHome">
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className="button_primaryHome"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {
          product && (
          <Modal isOpen={true} onRequestClose={this.closeModal} className="ModalSize">
            <Zoom>
              <button className="close-modalHome" onClick={this.closeModal}>
                X
              </button>
              <div className="product-detailsHome">
                <div className="img-containerHome">
                  <img src={product.image1} alt={product.title}></img>
                    
                      <img src={product.image2} alt={product.title}></img>
                      <img src={product.image3} alt={product.title}></img>
                    
                </div>

                

                <div className="product-details-descriptionHome" >
                  <p className="modal-titleHome">
                    <strong>{product.title}</strong>
                  </p>
                  <p>
                    Chategory: {" "}
                    {product.availableSizes.map((x, i)=>(
                      <span key={i}>
                        {" "}
                        <button className="button_primary_available_sizesHome">{x}</button>
                      </span>
                    ))}
                  </p>
                  <p>
                    {product.description}
                  </p>
                  
                  <div className="product-priceHome">
                    <div>Price: {" "}
                      {formatCurrency(product.price)}
                      <button className="button_primary_modalHome" onClick={() =>{
                        this.props.addToCart(product);
                        this.closeModal();}}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              
              </div>
            </Zoom>
          </Modal>)
        }
      </div>
    )
  }
}

export default ProductsHome
//export default connect((state) => ({products: state.products.items }), {fetchProducts})(Products);
