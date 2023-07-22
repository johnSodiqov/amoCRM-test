import React from 'react';
import "./intro.css"

const Intro = () => {
    return (
        <div className='container intro'>
            <div className="intro-header">
                <h1>Зарабатывайте больше <br /> <span>с WELBEX</span></h1>
                <p>Развиваем и контролируем <br /> продажи за вас</p>
            </div>
            <div className="intro-content">
                <h4>Вместе с <span>бесплатной <br /> консультацией</span> мы дарим:</h4>
                <div className="gifts">

                    <div className="gift-item">
                        <h3>Виджеты</h3>
                        <p>30 готовых решений</p>
                    </div>

                    <div className="gift-item">
                        <h3>Dashboard</h3>
                        <p>с показателями вашего бизнеса</p>
                    </div>

                    <div className="gift-item">
                        <h3>Skype Аудит</h3>
                        <p>отдела продаж и CRM системы</p>
                    </div>

                    <div className="gift-item">
                        <h3>35 дней</h3>
                        <p>использования CRM</p>
                    </div>

                </div>
                <button className='intro-button'>Получить консультацию</button>
            </div>
        </div>
    );
}

export default Intro;
