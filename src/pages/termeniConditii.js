import React from "react"
import Nav_bar from "../components/Nav_bar/Nav_bar"
import Termeni_Conditii_En from "../components/Termeni_Conditii/Termeni_Conditii_En"
import Footer from "../components/Footer/Footer"




export default function termeniConditii() {
  return (
    <div className="box_content">
      <Nav_bar />
      <Termeni_Conditii_En />
      
      <Footer />
    </div>
  )
}