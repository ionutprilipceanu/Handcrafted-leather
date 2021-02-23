import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
//import slide03 from "..//Carder/images/classic_briefcase_003.jpg"
import background_logo from "..//Carder/images/background_logo.png"
import "..//Carder/Carder.css"
import Fade from "react-reveal/Fade"
import DataImage from "..//..//ImageData.json"
import ThumbnailPhoto from "..//..//components/ThumbnailPhoto/ThumbnailPhoto"
import ThumbnailPhotoII from "..//..//components/ThumbnailPhotoII/ThumbnailPhotoII"



export class Carder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      thumbnails: DataImage.thumbnails,
      thumbnailsII: DataImage.thumbnailsII,
      size: "",
      sort: "",
      cartItems: [],
    }
  }

  componentDidMount() {
    this.setState({
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    })
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  }

  render() {
    return (
      <div className="containerBodyCarder">
        <div className="background_logo">
          <img
            src={background_logo}
            alt="background_logo"
          />
        </div>

        <Fade>
          <Card className="carder_body">
            <Card.Body>
              <Card.Title className="cardtitle">About Handcrafted leather</Card.Title>
              <Card.Subtitle className="cardSubtitle">Beginings</Card.Subtitle>
              <Card.Text className="cardText">
                It all started in the summer of 2014. I was on summer vacation, when I was a student. I found a piece of pork skin and thought of making myself a wallet. I searched on youtube how to make leather wallets and what tools I need. I didn't have skin processing tools but I improvised. I broke a hair clipper and took the knives from it and so I had the first "tool" for leather, which I used to make holes so that I could sew the skin later. In the end I managed to make a leather wallet that I bragged about to my friends and here they were my first clients.
              </Card.Text>

              <ThumbnailPhoto
                thumbnails={this.state.thumbnails}>
              </ThumbnailPhoto>

              <Card.Subtitle className="cardSubtitle">Present</Card.Subtitle>
              <Card.Text className="cardText">
                With the passage of time, quality products appeared, in the meantime I bought professional tools, I started working with other skin types, I learned to make patterns and use skin care products.

                I like challenges and that's why I started to expand my range of things made of leather, namely: wallets, bags, watch straps, trouser straps, dog collars, harnesses, agenda / book covers, keychains, bracelets, etc.
              </Card.Text>

              <ThumbnailPhotoII
                thumbnailsII={this.state.thumbnailsII}>
              </ThumbnailPhotoII>


            </Card.Body>
          </Card>
        </Fade>
      </div>
    )
  }
}

export default Carder
