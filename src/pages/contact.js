import React from "react"
import Nav_bar from "../components/Nav_bar/Nav_bar"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"
import "..//pages/style.css"



export default function Home() {
  return (
    <div className="box_content">
      <Nav_bar />
      <ContactForm />
      <Footer />
    </div>
  )
}