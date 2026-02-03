import React from 'react'
import Navbar from '../../components/header/Navbar/Navbar'
import Hero from '../../components/header/hero/Hero'
import { IconContext } from 'react-icons'
import Chose from '../../components/main/whychose/Chose'
import Materials from '../../components/main/mainmaterials/materials'
import About from '../../components/main/about/About'
import Question from '../../components/main/question/Question'
import Delivery from '../../components/main/delivery/Delivery'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <IconContext.Provider value={{size: "20px"}}>
        <Chose/>
      </IconContext.Provider>
      <Materials/>
      <About/>
      <Question/>
      <IconContext.Provider value={{size: "20px", color:"#27AE60"}}>
        <Delivery/>
      </IconContext.Provider>
      <IconContext.Provider value={{size: "20px"}}>
        <Footer/>
      </IconContext.Provider>
    </div>
    
  )
}

export default Home