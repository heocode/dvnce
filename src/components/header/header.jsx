import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from './../../img/logo.png';
import './header.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <Link to="/" className="row__img" onClick={closeMenu}>
                        <img src={logoImg} alt="" className="row__img-item" />
                    </Link>
                    <ul className={`row__list ${menuOpen ? 'row__list--open' : ''}`}>
                        <Link to="/#main" onClick={closeMenu}><li className='row__list-item'>Главная</li></Link>
                        <Link to="/#events" onClick={closeMenu}><li className='row__list-item'>Мероприятия</li></Link>
                        <Link to="/photos" onClick={closeMenu}><li className='row__list-item'>Фото</li></Link>
                        <Link to="/#questions" onClick={closeMenu}><li className='row__list-item'>Q&A</li></Link>
                        <Link to="/#footer" onClick={closeMenu}><li className='row__list-item'>Контакты</li></Link>
                    </ul>
                    <button className='burger-menu' onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose className="burger-menu__icon" /> : <AiOutlineMenu className="burger-menu__icon" />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;