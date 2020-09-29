import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import "..//Cursor/Cursor.css"
import slide01 from "..//Cursor/images/classic_briefcase_003.jpg"
import slide02 from "..//Cursor/images/cutlery_holder_002.jpg"
import slide03 from "..//Cursor/images/long_wallet_001.jpg"



export class Cursor extends Component {
  render() {
    return (
      <div className="carousel_body">
        <Carousel>
          <Carousel.Item>

            <img
              className="d-block w-100"
              src={slide01}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Classic briefcase</h3>
              <p>Great gift for men with good tastes.</p>
            </Carousel.Caption>
            
          </Carousel.Item>

          <Carousel.Item>

            <img
              className="d-block w-100"
              src={slide02}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Cutlery holder</h3>
              <p>More than perfect accessory for a skillful chef.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide03}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Long wallet</h3>
              <p>Quality and elegance for bold men.</p>
            </Carousel.Caption>

          </Carousel.Item>

        </Carousel>
      </div>
    )
  }
}

export default Cursor
