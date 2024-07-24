import React from 'react';
import AboutPage from '../about/aboutpage/aboutpage';
import madk1dImg from '../../img/madk1d.png'; // Импортируйте изображение для конкретного мероприятия

function MainContent() {
    // Данные для конкретного мероприятия (можно заменить на динамический список)
    const event = {
        imgSrc: madk1dImg,
        title: "MADK1D",
        time: "2024-06-22T18:00:00",
        place: "STORM | Оренбург",
        buttonText: "Купить билет",
        infoText: "Подробнее",
        buttonLink: 'https://orenburg.qtickets.events/115354-dance-x-madk1d',
        infoLink: "",
    };

    return (
        <section>
            <div className='container'>
                <AboutPage
                    imgSrc={event.imgSrc}
                    title={event.title}
                    time={event.time}
                    place={event.place}
                    buttonText={event.buttonText}
                    infoText={event.infoText}
                    buttonLink={event.buttonLink}
                    infoLink={event.infoLink}
                />
            </div>
        </section>
    );
}

export default MainContent;