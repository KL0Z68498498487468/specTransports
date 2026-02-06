import { FaVk } from "react-icons/fa6"
import "./Footer.scss"
import { FaFacebook, FaWhatsapp } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer">
            <div className="logo-footer">
                <img src="/public/images/footer/f_41164214e543b92c (1) 1.svg" alt="" />
                <p>Политика конфиденциальности © спец-транс, 2023</p>
            </div>
            <div className="nav-footer">
                <p>Материалы</p>
                <p>Услуги</p>
            </div>
            <div className="social-footer">
                <FaVk />
                <FaFacebook />
                <FaWhatsapp />
                <div className="footer-number">
                    <p>+7 928 245 15 20</p>
                </div>
            </div>
        </div>
    )
}

export default Footer