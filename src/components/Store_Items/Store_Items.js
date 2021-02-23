import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import slide01 from "..//Store_Items/images/blacky_wallet_001.jpg"
import slide02 from "..//Store_Items/images/card_holder_002.jpg"
import slide03 from "..//Store_Items/images/chic_bag_003.jpg"
import slide04 from "..//Store_Items/images/classic_bag_001.jpg"
import slide05 from "..//Store_Items/images/classic_briefcase_003.jpg"
import slide06 from "..//Store_Items/images/classic_wallet_003.jpg"
import slide07 from "..//Store_Items/images/covid_mask_004.jpg"
import slide08 from "..//Store_Items/images/cutlery_holder_002.jpg"
import slide09 from "..//Store_Items/images/fancy_wallet_002.jpg"
import slide10 from "..//Store_Items/images/handy_bag_003.jpg"
import slide11 from "..//Store_Items/images/card_holder_002.jpg"
import slide12 from "..//Store_Items/images/long_wallet_001.jpg"
import "..//Store_Items/Store_Items.css"
import { Button } from 'react-bootstrap'
// import Link from 'react-link'


export class Store_Items extends Component {
  render() {
    return (
      <div className="containerBody">
        <h1>Store</h1>
        <div className="containerCards">
          <div className="cards">
            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide01} alt="poza" />
              <Card.Body>
                <Card.Title>Blacky wallet</Card.Title>
                <Card.Text>
                  50 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide02} alt="poza" />
              <Card.Body>
                <Card.Title>Card holder</Card.Title>
                <Card.Text>
                  350 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide03} alt="poza" />
              <Card.Body>
                <Card.Title>Chic bag</Card.Title>
                <Card.Text>
                  250 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide04} alt="poza" />
              <Card.Body>
                <Card.Title>Classic bag</Card.Title>
                <Card.Text>
                  150 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide05} alt="poza" />
              <Card.Body>
                <Card.Title>Classic briefcase</Card.Title>
                <Card.Text>
                  50 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide06} alt="poza" />
              <Card.Body>
                <Card.Title>Classic wallet</Card.Title>
                <Card.Text>
                  350 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide07} alt="poza" />
              <Card.Body>
                <Card.Title>Covid mask</Card.Title>
                <Card.Text>
                  250 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide08} alt="poza" />
              <Card.Body>
                <Card.Title>Cutlery holder</Card.Title>
                <Card.Text>
                  150 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide09} alt="poza" />
              <Card.Body>
                <Card.Title>Fancy wallet</Card.Title>
                <Card.Text>
                  50 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide10} alt="poza" />
              <Card.Body>
                <Card.Title>Handy bag</Card.Title>
                <Card.Text>
                  350 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide11} alt="poza" />
              <Card.Body>
                <Card.Title>Card holder</Card.Title>
                <Card.Text>
                  250 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>

            <Card className="cardItemStore">
              <Card.Img variant="top" src={slide12} alt="poza" />
              <Card.Body>
                <Card.Title>Long wallet</Card.Title>
                <Card.Text>
                  150 lei
                  </Card.Text>
                <Button variant="primary" className="cardBtn">More details</Button>
              </Card.Body>
            </Card>
          </div>


        </div>
      </div>
    )
  }
}

export default Store_Items
