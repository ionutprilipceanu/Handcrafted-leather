import React from "react"
import Nav_bar from "../components/Nav_bar/Nav_bar"
import Politica_Confidentialitate_En from "../components/Politica_Confidentialitate/Politica_Confidentialitate_En"
import Footer from "../components/Footer/Footer"




export default function politicaConfdentialitate() {
  return (
    <div className="box_content">
      <Nav_bar />
      <Politica_Confidentialitate_En />

      <Footer />
    </div>
  )
}