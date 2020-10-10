import React, { Component } from "react"
import Carder from "../components/Carder/Carder"
//import ThumbnailPhoto from "../components/ThumbnailPhoto/ThumbnailPhoto"
import ProductsHome from '../components/ProductsHome/ProductsHome'
import Nav_bar from "../components/Nav_bar/Nav_bar"
import Footer from "../components/Footer/Footer"
import Cursor from "../components/Cursor/Cursor"
import "..//pages/style.css"
import dataFirstPage from "..//dataFirstPage.json"
import DataImage from "..//ImageData.json"
import Helmet from "react-helmet"
import favicon from '..//images/favicon.png'




 class IndexPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      thumbnails: DataImage.thumbnails,
      products: dataFirstPage.products,
      size:"",
      sort:"",
      cartItems: [],
    }
  }
  
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  componentDidMount() {
    this.setState({
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    })
  } 

  openModal = (product) =>{
    this.setState({product});
  };

  closeModal = () =>{
    this.setState({product:null});
  }

   render(){
      return (
        <div className="box_content">
          <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Marian Mihalache - Handcrafted leather | Iași  </title>
            <meta name="title" content="Marian Mihalache - Handcrafted leather | Iași  "/>
            <meta name="description" content="My name is Marian Mihalache and I love to do stuff from handcrafted leather. Shop handcrafted wallets, bags, watch straps, accessories, gifts and more."/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="keywords" content="wallets from leather, bags, watch straps, trouser straps, dog collars, harnesses, agenda / book covers, keychains, bracelets, handmade crafts, portofele din piele, genti din piele, curele pentru ceasuri, zgarda pentru caine, coperti din piele, serviete din piele, strapuri aparate foto,"></meta>
            <meta name="author" content="Marian Mihalache"/>
            <meta property="og:locale" content="ro_RO"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Marian Mihalache - Handcrafted leather | Iași"/>
            <meta property="og:site_name" content="Marian Mihalache - Handcrafted leather | Iași"></meta>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <link rel="icon" href={favicon} />


            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="Marian Mihalache - Handcrafted leather | Iași  "/>
            <meta property="og:description" content="My name is Marian Mihalache and I love to do stuff from handcrafted leather. Shop handcrafted wallets, bags, watch straps, accessories, gifts and more."/>
            <meta property="og:image" content="https://handcrafted-leather.netlify.app/images/chategory/classic_briefcase/classic_briefcase_003.jpg"/>
	          <meta property="og:image:width" content="1200"/>
	          <meta property="og:image:height" content="630"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Marian Mihalache - Handcrafted leather | Iași  "/>
            <meta property="twitter:description" content="My name is Marian Mihalache and I love to do stuff from handcrafted leather. Shop handcrafted wallets, bags, watch straps, accessories, gifts and more."/>
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
          </Helmet>

          <Nav_bar />
          <Cursor />
          <ProductsHome 
            products={this.state.products} 
            addToCart={this.addToCart}> 
          </ProductsHome>
          <Carder>
          </Carder>
          {/* <ThumbnailPhoto
            thumbnails={this.state.thumbnails}>
          </ThumbnailPhoto> */}
          
          <Footer />
        </div>
      )
    }
  }


export default IndexPage
