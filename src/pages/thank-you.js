import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Info</h1>
    <p>Thank you for your submission!</p>
    <Link to="/index.js">Go back to the home page</Link>
  </Layout>
)

export default SecondPage
