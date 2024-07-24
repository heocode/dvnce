import React, { useState, useEffect } from "react";
import './afishes.css';
import Event from './components/event';
import xxxmanera from '../../img/manera.webp';
import lizer from '../../img/lizer.webp';
import madk1d from '../../img/madk1d.webp';
import aquakey from '../../img/aquakey.webp';
import sbombm from '../../img/sbombmos.webp';
import sbombs from '../../img/sbombspb.webp';

function hasPassed(time) {
    const currentDate = new Date().getTime();
    const eventDate = new Date(time).getTime();
    return eventDate < currentDate;
}

function isNewerDate(time) {
    return !hasPassed(time);
}

function formatTime(time) {
    const eventDate = new Date(time);
    return eventDate.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function Afishes() {
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(3);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const options = [
        { label: "Все мероприятия", value: 'all' },
        { label: "Будущие мероприятия", value: 'future' },
        { label: "Прошедшие мероприятия", value: 'past' },
    ];

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            if (!mobile) {
                setVisibleCount(sortedEvents.length);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleSelect(event) {
        setFilter(event.target.value);
        setVisibleCount(isMobile ? 3 : sortedEvents.length);
    }

    function handleLoadMore() {
        setVisibleCount(prevCount => prevCount + 3);
    }

    function handleShowLess() {
        setVisibleCount(3);
    }

    const allEvents = [
        {
          imgSrc: xxxmanera,
          title: "XXXMANERA & JOSODO",
          time: "2024-05-19T18:00:00",
          place: "СТUDИЯ | Оренбург",
          buttonText: "Посмотреть фото",
          infoText: "Подробнее",
          buttonLink: "/photos",
          infoLink: "/events/xxxmanera-josodo",
          hasPassed: hasPassed("2024-05-19T18:00:00")
        },
        {
          imgSrc: lizer,
          title: "LIZER",
          time: "2024-07-28T19:00:00",
          place: "СТUDИЯ | Оренбург",
          buttonText: "Купить билет",
          infoText: "Подробнее",
          buttonLink: "https://orenburg.qtickets.events/116130-lizer",
          infoLink: "/events/lizer",
          hasPassed: hasPassed("2024-07-28T19:00:00")
        },
        {
          imgSrc: aquakey,
          title: "AQUAKEY",
          time: "2024-07-03T19:00:00",
          place: "ACTION | Санкт-Петербург",
          buttonText: "Посмотреть фото",
          infoText: "Подробнее",
          buttonLink: "/photos",
          infoLink: "/events/aquakey",
          hasPassed: hasPassed("2024-07-03T19:00:00")
        },
        {
          imgSrc: madk1d,
          title: "MADK1D",
          time: "2024-06-22T18:00:00",
          place: "STORM | Оренбург",
          buttonText: "Посмотреть фото",
          infoText: "Подробнее",
          buttonLink: '/photos',
          infoLink: "/events/madk1d",
          hasPassed: hasPassed("2024-06-22T18:00:00")
        },
        {
            imgSrc: sbombs,
            title: "SBOMBA31 & DAYERTEQ",
            time: "2024-07-25T18:00:00",
            place: "Город | Санкт-Петербург",
            buttonText: "Купить билет",
            infoText: "Подробнее",
            buttonLink: 'https://spb.qtickets.events/120672-sbomba-dayarteq-peterburge',
            infoLink: "/events/sbombasp",
            hasPassed: hasPassed("2024-08-01T18:00:00")
        },
        {
            imgSrc: sbombm,
            title: "SBOMBA31 & DAYERTEQ",
            time: "2024-08-01T18:00:00",
            place: "Город | Москва",
            buttonText: "Купить билет",
            infoText: "Подробнее",
            buttonLink: 'https://moscow.qtickets.events/120527-sbomba31-dayerteq',
            infoLink: "/events/sbombamsc",
            hasPassed: hasPassed("2024-08-01T18:00:00")
        }
      ];

    const filteredEvents = allEvents.filter(event => {
        switch (filter) {
            case 'future':
                return isNewerDate(event.time);
            case 'past':
                return hasPassed(event.time);
            default:
                return true;
        }
    });

    const sortedEvents = filteredEvents.sort((a, b) => {
        if (a.hasPassed && !b.hasPassed) {
            return 1;
        } else if (!a.hasPassed && b.hasPassed) {
            return -1;
        } else if (!a.hasPassed && !b.hasPassed) {
            return new Date(a.time) - new Date(b.time);
        } else {
            return new Date(b.time) - new Date(a.time);
        }
    });

    const visibleEvents = isMobile ? sortedEvents.slice(0, visibleCount) : sortedEvents;

    return (
        <section className='afisha' id="events">
            <div className="container">
                <h1 className="afisha__title">Мероприятия</h1>
                <label className="afisha__option">
                    <select name="selectedEvent" onChange={handleSelect} className='afisha__select'>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </label>
                <div className={`events ${filter === 'all' ? 'center' : 'left'}`}>
                    {visibleEvents.map((event, index) => (
                        <Event
                            key={index}
                            imgSrc={event.imgSrc}
                            title={event.title}
                            time={formatTime(event.time)}
                            place={event.place}
                            buttonText={event.buttonText}
                            infoText={event.infoText}
                            buttonLink={event.buttonLink}
                            infoLink={event.infoLink}
                        />
                    ))}
                </div>
                {isMobile && (
                    <div className="load-more-container">
                        {visibleCount < sortedEvents.length ? (
                            <button className="load-more-button" onClick={handleLoadMore}>Посмотреть еще афиши</button>
                        ) : (
                            sortedEvents.length > 3 && (
                                <button className="load-more-button" onClick={handleShowLess}>Свернуть афиши</button>
                            )
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Afishes;