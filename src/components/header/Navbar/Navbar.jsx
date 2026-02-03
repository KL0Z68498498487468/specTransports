import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/public/images/header/f_41164214e543b92c (1) 1.svg" alt="" />
      </div>
      <ul>
        <li>Услуги</li>
        <BrowserRouter>
        <NavLink to={"/src/pages/materials"}>
          <li>Материалы</li>
        </NavLink>
        </BrowserRouter>
        
        
        <li>Доставка и оплата</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ul>
    </nav>
  )
}

export default Navbar