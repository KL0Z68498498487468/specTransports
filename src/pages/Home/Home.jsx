import React from 'react'
import Hero from '../../components/Home/header/hero/Hero'
import { IconContext } from 'react-icons'
import Chose from '../../components/Home/main/whychose/Chose'
import Materials from '../../components/Home/main/mainmaterials/materials'
import About from '../../components/Home/main/about/About'
import Delivery from '../../components/Home/main/delivery/Delivery'
import Question from '../../components/Shared/question/Question'
import Footer from '../../components/Base/footer/Footer'

function Home() {
  return (
    <div>
      
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