import { useState } from 'react'
import './Hero.scss'

const Hero = () => {

    

    return (
        <div className="hero" >
            <div className="hero-main">
                <h1>Продажа и доставка нерудных материалов</h1>
                <p>У нас вы можете заказать материалы премиального качества.
                    Индивидуальный подход и качественная продукция – ключевые преимущества
                    нашей компании.</p>
                <div className="button-zone">
                    <input type="button" value="Заказать звонок" />
                </div>
            </div>
        </div>
    )
}

export default Hero 