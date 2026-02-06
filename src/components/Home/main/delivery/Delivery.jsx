import { FaStar } from "react-icons/fa"
import "./Delivery.scss"

function Delivery() {
    return (
        <div className="delivery">
            <div className="info-part">
                <div className="center-container">
                    <div className="text-part">
                    <h1>Доставка </h1>
                    <p>Основная миссия компании Спец-транс — комплексные поставки нерудных материалов для корпоративных клиентов и частных лиц. Мы осуществлем доставку по Санкт-Петербургу и Ленинградской области.</p>
                </div>
                <div className="condition">
                    <FaStar /> <p>Вы оставляете заявку через сайт или по телефону.</p>
                </div>
                <div className="condition">
                    <FaStar /> <p>Мы производим точный расчет стоимости</p>
                </div>
                <div className="condition">
                    <FaStar /> <p>Осуществляем поставку заказанного вами материала точно в срок</p>
                </div>
                <div className="condition">
                    <FaStar /> <p>Соблюдаем своевременный документооборот</p>
                </div>
                <div className="info-section">
                    <div className="location">
                        <p>г. Санкт-Петербург,</p>
                        <p>Невский проспект, д. 12/2</p>
                    </div>
                    <div className="num">
                        <p>+7 812 545 44 53</p>
                        <p>Ежедневно с 08:00 до 24:00</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="map-part">
                <div className="zone-delivery">
                    <h4>Зона доставки</h4>
                </div>
                <div className="map">
                    <img src="/public/images/main/Ellipse 8.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Delivery