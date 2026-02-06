import "./Question.scss"

function Question() {
  return (
    <div className="main-question">
        <div className="part-1">
            <div className="text-part">
            <div className="questions">
                <h1>Остались вопросы?</h1>
            <p>Закажите обратный звонок и узнайте больше о наших услугах!</p>
            <p>Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут</p>
            </div>
            <div className="button-part">
                <input className="order" type="button" value="Заказать звонок" />
            </div>
            </div>
        </div>
        <div className="stripe">
            
        </div>
        <div className="fields">
            <input type="text" placeholder="Имя" className="name" />
            <input type="number" placeholder="Фамиля" className="number"/>
            <textarea name="" id="" placeholder="коментарии" className="comments"></textarea>
            <p>Соглашение о персональных данных</p>

            <div className="send-info">
                <input type="button" value="отправить заявку" />
            </div>
        </div>
    </div>
  )
}

export default Question