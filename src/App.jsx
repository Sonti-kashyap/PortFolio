// import React from "react"
import { Toaster } from "react-hot-toast"
import About from "./components/About"
import Contact from "./components/Contact"
import Experiance from "./components/Experiance"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import PortFolio from "./components/PortFolio"
import Footer from "./Footer"


function App() {
  return (
    <>
    <div>
      
      <Navbar/>
      <Home/>
      <About/>
      <PortFolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
    </>
  )
}

export default App
