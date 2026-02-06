import "./About.scss"

function About() {
    return (
        <div className="About">
            <div className="text-part">
                <h1>О компании СПЕЦ-ТРАНС</h1>
                <p>Наша фирма существует уже многие годы, заработав репутацию на рынке предлагаемых услуг как надежного и ответственного партнера. В число наших клиентов вошли крупнейшие организации. При этом стоит отметить, что на индивидуальный подход при заказе наших услуг могут рассчитывать как крупные компании, так и частные лица.</p>
            </div>
            <div className="about-technique">
                <div className="number">
                    <div className="number-box">
                        <h1>60</h1><h3>+</h3>
                    </div>
                    <p>Единиц техники</p>
                </div>
                <div className="careers">
                    <h1>15</h1>
                    <p>Карьеров</p>
                </div>
            </div>
        </div>
    )
}

export default About