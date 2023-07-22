import React from 'react';
import navlogo1 from "./nav-logo1.png"
import navlogo2 from "./nav-logo2.png"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='container'>
            <nav>

                <div className="nav-logo">
                    <div className="logo-img">
                        <img src={navlogo1} alt="nav-logo" />
                        <img src={navlogo2} alt="nav-logo" />
                    </div>

                    <p className="logo-inner">крупный интегратор CRM в Росcии и ещё 8 странах</p>

                </div>

                <div className="nav-link">
                    <a href="#link">Услуги</a>
                    <a href="#link">Виджеты</a>
                    <a href="#link">Интеграции</a>
                    <a href="#link">Кейсы</a>
                    <a href="#link">Сертификаты</a>
                </div>

                <div className="nav-contact">
                    <p>+7 555 555-55-55</p>
                    <div className="contact-icon">
                        <i className='bi bi-telegram'></i>
                        <i className="bi bi-telephone-fill"></i>
                        <i className='bi bi-whatsapp'></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
