import React from "react"
import { Link } from "gatsby"
import { Button } from 'react-bootstrap'


const SecondPage = () => (
  <div className="thank-you">
    <h1>Info</h1>
    <p>Thank you for your submission!</p>
    <Link to="/"><Button variant="primary" type="submit" className="send_Btn">Back to home page</Button></Link>
  </div>
)

export default SecondPage
