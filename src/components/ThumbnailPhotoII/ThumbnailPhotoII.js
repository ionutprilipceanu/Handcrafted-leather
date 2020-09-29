import React, { Component } from 'react'
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import "..//ThumbnailPhotoII/ThumbnailPhotoII.css";



class ThumbnailPhotoII extends Component {
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
    const {product} = this.state;
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.thumbnailsII ? (
            <div>Loading...</div>
          ) : (
            <ul className="productsThumbnailPhotoII" >
              {this.props.thumbnailsII.map((product) => (
                <li key={product._id}>
                  <div className="productThumbnailPhotoII">
                    <a
                      href={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.image} alt={product.title}></img>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {
          product && (
          <Modal isOpen={true} onRequestClose={this.closeModal} className="ModalSizeThumbnailPhotoII">
            <Zoom>
              <button className="close-modalThumbnailPhotoII" onClick={this.closeModal}>
                X
              </button>
              <div className="product-detailsThumbnailPhotoII">
                <div className="img-containerThumbnailPhotoII">
                  <img src={product.image} alt={product.title}></img>
                </div>
              </div>
            </Zoom>
          </Modal>)
        }
      </div>
    )
  }
}

export default ThumbnailPhotoII

