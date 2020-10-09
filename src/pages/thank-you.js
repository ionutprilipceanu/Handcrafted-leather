import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const SecondPage = () => (
  <Layout>

    <h1>Info</h1>
    <p>Thank you for your submission!</p>
    <Link to="/index">Go back to the home page</Link>
  </Layout>
)

export default SecondPage
