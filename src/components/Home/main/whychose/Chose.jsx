import { FaBullseye, FaBusinessTime, FaClockRotateLeft, FaRankingStar, FaUsers } from 'react-icons/fa6'
import './Chose.scss'


function Chose() {
  return (
    <div className="main">
        <div className="header">
            <h1>Почему выбирают нас</h1>
        </div>
        <div className="main-card">
            <div className="adv">
                <div className="icon-part">
                    <FaClockRotateLeft/>
                </div>
                <div className="text-part">
                    Мы работаем с 2000 года
                </div>
            </div>
            <div className="adv">
                <div className="icon-part">
                    <FaUsers/>
                </div>
                <div className="text-part">
                    Более 5000 счастливых клиентов
                </div>
            </div>
            <div className="adv">
                <div className="icon-part">
                    <FaBullseye/>
                </div>
                <div className="text-part">
                    Лучшие цены
                </div>
            </div>
            <div className="adv">
                <div className="icon-part">
                    <FaRankingStar/>
                </div>
                <div className="text-part">
                    Качественная продукция
                </div>
            </div>
            <div className="adv">
                <div className="icon-part">
                    <FaBusinessTime/>
                </div>
                <div className="text-part">
                    Оперативность
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chose