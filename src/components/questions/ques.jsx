import React, { useState } from 'react';
import './ques.css';

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "Как вернуть билет?",
            answer: (
                <span>
                    Вернуть билет вы можете легко написав нашему телеграмм-боту, <a href="https://t.me/dvncechat_bot" target="_blank" rel="noopener noreferrer">DanceSupport</a><br/><br/>Возврат за 10 дней и более - 100% от стоимости билета<br/>Возврат от 9 до 5 дней - 50%<br/>Возврат от 4 до 3 дней - 30%<br/>Менеее трех дней - не принимаются к возврату!<br/><br/>Билеты купленные по промокодам не возвращаются!
                </span>
            )
        },
        {
            question: "Со скольки лет можно посещать мероприятия?",
            answer: "Чтобы пройти на мероприятие вам должно быть минимум 14 лет. При себе иметь документ удостоверяющий личность"
        },
        {
            question: "Как я могу узнать о новых событиях?",
            answer: (
                <span>
                    Мы активно ведем наш телеграмм-канал, вы можете подписаться на него, <a href="https://t.me/dvnce_events" target="_blank" rel="noopener noreferrer">здесь</a>!
                </span>
            )
        }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="ques" id='questions'>
            <div className="container">
                <div className='questions'>
                    <h1 className='question__title'>Q&A</h1>
                    <div className='question__list'>
                        {questions.map((item, index) => (
                            <div key={index} className='question__item' onClick={() => toggleAnswer(index)}>
                                <div className='question__text'>
                                    {item.question}
                                </div>
                                {activeIndex === index && <div className='answer__text'>{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Questions;