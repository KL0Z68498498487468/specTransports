import { IconContext } from 'react-icons'
import './App.scss'
import Hero from './components/header/hero/Hero'
import Navbar from './components/header/Navbar/Navbar'
import Chose from './components/main/whychose/Chose'
import Materials from './components/main/mainmaterials/materials'
import About from './components/main/about/About'
import Question from './components/main/question/Question'
import Delivery from './components/main/delivery/Delivery'
import Footer from './components/footer/Footer'
import Materialsprice from './pages/materials/Materialsprice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'





function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='./' element={<Home/>}/>
          <Route path='./pages/materials' element={<Materialsprice/>}/>
        </Routes>
      </BrowserRouter>
      <Home/>
    </div>
      
    
    
  )
}

export default App
