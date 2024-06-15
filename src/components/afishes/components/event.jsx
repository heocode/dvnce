import React from 'react';
import { Link } from 'react-router-dom';
import './event.css';

function Event({ imgSrc, title, time, place, buttonText, infoText, buttonLink, infoLink }) {
    const isExternalLink = (url) => {
        return url.startsWith('http') || url.startsWith('www');
    };

    return (
        <div className="list">
            <img src={imgSrc} alt="" className='data__img' />
            <div className='data'>
                <h1 className='data__title'><span style={{ color: '#d00040' }}>{title}</span></h1>
                <div>
                    <h3 className='data__time'>{time}</h3>
                    <h3 className='data__place'>{place}</h3>
                </div>
                <div className='data__btns'>
                    {isExternalLink(buttonLink) ? (
                        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className='data__btn-item'>{buttonText}</a>
                    ) : (
                        <Link to={buttonLink} className='data__btn-item'>{buttonText}</Link>
                    )}
                    <Link to={infoLink} className='data__btn-item'>{infoText}</Link>
                </div>
            </div>
        </div>
    );
}

export default Event;