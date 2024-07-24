import React from 'react';
import { useParams } from 'react-router-dom';
import AboutPage from './aboutpage/aboutpage'; // Импорт компонента AboutPage
import xxxmanera from '../../img/manera.webp';
import madk1d from '../../img/madk1d.webp';
import lizer from '../../img/lizer.webp';
import aquakey from '../../img/aquakey.webp';
import sbomba31 from '../../img/sbombmos.webp';
import sbomba31sp from '../../img/sbombspb.webp';

function About() {
  // Получаем параметр eventId из маршрута
  const { eventId } = useParams();

  // Массив с информацией о мероприятиях
  const allEvents = [
    {
      id: 'xxxmanera-josodo', // Уникальный идентификатор афиши
      aboutTitle: "XXXMANERA & JOSODO x DANCE x ALTERA",
      aboutText: (
        <p>
          А вот и наша первая тусовка<br />
          Врываемся с фрешменами!<br />
          На нашей тусовке для вас выступят такие именитые гости, как <a href="https://vk.com/xxxmanera">xxxmanera</a> и <a href="https://vk.com/josodo_official">Josodo</a>, которые исполнят для вас свои нашумевшие треки и новый материал<br />
        </p>
      ),
      aboutBtn: "Посмотреть фото",
      aboutSrc: '/photos', 
      aboutImg: xxxmanera,
    },
    {
      id: 'madk1d',
      aboutTitle: "MADK1D x DANCE",
      aboutText: (
        <p>
          На нашей тусовке будет специальный гость <a href="https://vk.com/madk11d">madk1d</a>, Марк известен своими песнями в VHS стиле.<br />
          Рэп, рок и панк - это всё про него. madk1d впервые выступит в Оренбурге, чтобы порадовать вас своими хитами, такие как <a href="https://vk.com/audio-2001137058_110137058">«Толпы»</a>, <a href="https://vk.com/audio-2001646140_120646140">«Барыга»</a>, а также исполнит для вас новые релизы<br/>
        </p>
      ),
      aboutBtn: "Фотки позже",
      aboutSrc: "/photos", 
      aboutImg: madk1d,
    },
    {
      id: 'lizer',
      aboutTitle: "БОЛЬШОЙ КОНЦЕРТ LIZER",
      aboutText: (
        <p>
          Мы представляем для вас коллаборационное мероприятие<br/>
          Уже 28 июля для Вас выступит <a href="https://vk.com/lizer">LIZER</a> — пожалуй, самый долгожданный артист, автор таких хитов, как: <a href="https://vk.com/audio-2001649955_108649955">«False Mirror»</a>, <a href="https://vk.com/audio-2001689442_126689442">«Между нами»</a>, <a href="https://vk.com/audio-2001679588_113679588">«Не герой»</a>, <a href="https://vk.com/audio-2001377134_43377134">«Пачка сигарет»</a>, <a href="https://vk.com/audio-2001689438_126689438">«Корабли»</a>, <a href="https://vk.com/audio-2001269105_123269105">«Мечта»</a>.
        </p>
      ),
      aboutBtn: "Купить билеты",
      aboutSrc: "https://orenburg.qtickets.events/116130-lizer", 
      aboutImg: lizer,
    },
    {
      id: 'aquakey',
      aboutTitle: "AQUAKEY",
      aboutText: (
        <p>
          Уже 3 июля в клубе Action со своей сольной программой для вас выступит <a href="https://vk.com/aquakegriefangel">Aquakey</a> - участник объединения DOOM RUSHAZ<br/>
          А разогревать вас своими сетами будет dj Haru Matsui.
        </p>
      ),
      aboutBtn: "Посмотреть фото",
      aboutSrc: "/photos", 
      aboutImg: aquakey,
    },
    {
      id: 'sbombamsc',
      aboutTitle: "SBOMBA31 & DAYERTEQ",
      aboutText: (
        <p>
          Александр и Макар авторы таких нашумевших треков, как <a href="https://vk.com/audio-2001149889_128149889">panacea</a>, <a href="https://vk.com/audio-2001149891_128149891">moet&chandon</a>,  <a href="https://vk.com/audio-2001149892_128149892">squirt game</a>, <a href="https://vk.com/audio602278261_456241567_f8ddf20537e056d24f">beztebya</a>, <a href="https://vk.com/audio-2001372001_127372001">Я так обожаю</a>. <br/>
          Артисты исполнят для вас свои нашумевшие треки и множество нового материала
        </p>
      ),
      aboutBtn: "Купить билет",
      aboutSrc: "https://moscow.qtickets.events/120527-sbomba31-dayerteq", 
      aboutImg: sbomba31,
    },
    {
      id: 'sbombasp',
      aboutTitle: "SBOMBA31 & DAYERTEQ",
      aboutText: (
        <p>
          Александр и Макар авторы таких нашумевших треков, как <a href="https://vk.com/audio-2001149889_128149889">panacea</a>, <a href="https://vk.com/audio-2001149891_128149891">moet&chandon</a>,  <a href="https://vk.com/audio-2001149892_128149892">squirt game</a>, <a href="https://vk.com/audio602278261_456241567_f8ddf20537e056d24f">beztebya</a>, <a href="https://vk.com/audio-2001372001_127372001">Я так обожаю</a>. <br/>
          Артисты исполнят для вас свои нашумевшие треки и множество нового материала
        </p>
      ),
      aboutBtn: "Купить билет",
      aboutSrc: "https://spb.qtickets.events/120672-sbomba-dayarteq-peterburge", 
      aboutImg: sbomba31sp,
    },
  ];

  // Находим нужную афишу по eventId
  const event = allEvents.find(event => event.id === eventId);

  // Если афиша не найдена, можно показать сообщение об ошибке или редирект
  if (!event) {
    return <div>Мероприятие не найдено</div>;
  }

  // Возвращаем компонент с информацией о найденной афише
  return (
    <section>
      <div className='container'>
        <AboutPage
          aboutTitle={event.aboutTitle}
          aboutText={event.aboutText}
          aboutBtn={event.aboutBtn}
          aboutSrc={event.aboutSrc}
          aboutImg={event.aboutImg}
        />
      </div>
    </section>
  );
}

export default About;
