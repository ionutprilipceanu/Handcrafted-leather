import React, {Component} from 'react'
import './ContactForm.css'
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import favicon from '..//..//images/favicon.png'

class ContactForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showText: true
    }
  }
  
  butonulMeu() {
    this.setState({
      showText: !this.state.showText
    })
  }
  
  render() {
  return (
    <div className="continutForm">
      
      <Form 
      className="formBody"
      method="post" 
      netlify-honeypot="bot-field" 
      data-netlify="true" 
      name="contact" 
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      <Fade left cascade>
        <div className="titlu"><h1>Contact form</h1></div>
        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label htmlFor="name" >First Name</Form.Label>
            <Form.Control 
            type="text" 
            name="name" 
            placeholder="Enter first name"
            required onChange={this.handInput}
            method="post" 
            netlify-honeypot="bot-field" 
            data-netlify="true" 
            />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label htmlFor="lastname" >Last Name</Form.Label>
            <Form.Control 
            // id="lastname-input" 
            type="text" 
            name="name" 
            placeholder="Enter last name" 
            required onChange={this.handInput}
            method="post" 
            netlify-honeypot="bot-field" 
            data-netlify="true" 
            />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="phone" >Phone</Form.Label>
            <Form.Control 
            placeholder="Enter phone number" 
            id="phone-input" 
            type="text" 
            name="phone" 
            required onChange={this.handInput}
            method="post" 
            netlify-honeypot="bot-field" 
            data-netlify="true" 
            />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="email" >Email</Form.Label>
            <Form.Control 
            id="address-input" 
            type="text" 
            name="address" 
            placeholder="Delivery address" 
            required onChange={this.handInput}
            method="post" 
            netlify-honeypot="bot-field" 
            data-netlify="true"  
            />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </Form.Group>
        </Form.Row>
            
        <Form.Group>
          <Form.Label>Enter your text</Form.Label>
          <Form.Control as="textarea" rows="5" columns="2"
          id="text-area" 
          type="text" 
          name="comment" 
          required onChange={this.handInput}  
          method="post" 
          netlify-honeypot="bot-field" 
          data-netlify="true" 
          />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        </Form.Group>   

        <Button variant="primary" type="submit" className="send_Btn">
          Submit
        </Button>
        </Fade>
      </Form>
      
    
      <div className="contactInfo">
        {this.state.showText ?
        <Fade top cascade>
        <div className="titlu">
          <h1>Contact info</h1>
        </div>
        </Fade>
      :
      <Fade bottom cascade>
        <div className="titluShow">
          <h1>Contact info</h1>

          <div className="contactName">
          <img src={favicon}  alt="logo" className="contactLogo"/>
          <p>
              Name: Marian Mihalache <br/>
              Phone number: 0751684142 <br/>
              E-mail: marian-mihalache@gmail.com
          </p>
          </div>
        </div>
        </Fade>
        }
        
        
        <Button variant="primary" className="send_Btn" onClick={() => this.butonulMeu()}> {this.state.showText ?
          'More info' : 'Less info' }
        </Button>
      </div>
    </div>
  ) 
  }
}

export default ContactForm
