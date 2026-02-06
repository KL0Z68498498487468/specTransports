import './App.scss'
import Materialsprice from './pages/materials/Materialsprice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Base/Navbar/Navbar'





function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/materials' element={<Materialsprice/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      
    
    
  )
}

export default App
