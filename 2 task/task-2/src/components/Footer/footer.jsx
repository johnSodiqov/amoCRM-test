import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer container'>
            <footer>
                <div className="footer-link">
                    <div className="link-header">
                        <h3>О компании</h3>
                    </div>
                    <div className="link-item">
                        <a href="#link">Партнёрская программа</a>
                        <a href="#link">Вакансии</a>
                    </div>
                </div>
                < div className="footer-link">
                    <div className="link-header">
                        <h3>Меню</h3>
                    </div>
                    <div className="link-item">
                        <a href="#link">Расчёт стоимости</a>
                        
                        <a href="#link">Кейсы</a>
                        <a href="#link">Услуги</a>
                        <a href="#link">Благодарственные письма</a>
                        <a href="#link">Виджеты</a>
                        <a href="#link">Сертификаты</a>
                        <a href="#link">Интеграции</a>
                        <a href="#link">Блог на Youtube</a>
                        <a href="#link">Наши клиенты</a>
                        <a href="#link">Вопрос / Ответ</a>
                    </div>
                </div>
                <div className="footer-link">
                    <div className="link-header">
                        <h3 className='text-end'>Контакты</h3>
                    </div>
                    <div className="link-item">
                        <a href="#link" className='w-100 text-end'>+7 555 555-55-55</a>
                        <div className="contact-icon">
                            <i className='bi bi-telegram'></i>
                            <i className="bi bi-telephone-fill"></i>
                            <i className='bi bi-whatsapp'></i>
                        </div>
                        <a href="#link">Москва, Путевой проезд 3с1, к 902</a>
                    </div>
                </div>
            </footer>
            <div className="footer-inner">
                <div>
                    <p>©WELBEX 2022. Все права защищены.</p>
                    <a href="#link">Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
