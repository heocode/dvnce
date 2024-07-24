import React, { useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';
import './photos.css';
import desu from '../../img/desu.webp';
import badman2 from '../../img/badman3.webp';
import people2 from '../../img/people3.webp';
import xmanera from '../../img/manera1.webp';
import xmanera1 from '../../img/manera2.webp';
import josodo from '../../img/josodo.webp';
import djeban from '../../img/djeban.webp';
import madkid1 from '../../img/madk1d1.webp';
import madkid2 from '../../img/madk1d2.webp';
import madkid3 from '../../img/madk1d3.webp';
import madkid4 from '../../img/madk1d4.webp';
import madkid5 from '../../img/madk1d5.webp';
import madkid6 from '../../img/madk1d6.webp';
import aquakey1 from '../../img/aquakey1.webp';
import aquakey2 from '../../img/aquakey2.webp';
import aquakey3 from '../../img/aquakey3.webp';
import aquakey4 from '../../img/aquakey4.webp';
import aquakey5 from '../../img/aquakey5.webp';

function Photos() {
    const [showAquakey, setShowAquakey] = useState(false);
    const [showXmanera, setShowXmanera] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleShowMore = () => {
        if (!showAquakey) {
            setShowAquakey(true);
        } else if (!showXmanera) {
            setShowXmanera(true);
        }
    };

    const handleShowLess = () => {
        setShowAquakey(false);
        setShowXmanera(false);
    };

    return (
        <section className='photo'>
            <div className="container">
                <div className='pictures'>
                    <div className='pictures__layout'>
                        <h1 className='pictures__title'>MADK1D</h1>
                        <div className="pictures__img">
                            <LazyLoad height={200} offset={100}>
                                <img src={madkid1} alt="" className='pictures__img-item'/>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100}>
                                <img src={madkid2} alt="" className='pictures__img-item'/>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100}>
                                <img src={madkid3} alt="" className='pictures__img-item'/>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100}>
                                <img src={madkid4} alt="" className='pictures__img-item'/>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100}>
                                <img src={madkid5} alt="" className='pictures__img-item'/>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100}>
                                <img src={madkid6} alt="" className='pictures__img-item'/>
                            </LazyLoad>
                        </div>
                        <div className='pictures__btns'>
                            <a href='https://disk.yandex.ru/d/AhgDQ-wgCm8LjQ' className='pictures__btns-item'>Все фотки</a>
                            <a href='https://disk.yandex.ru/d/ASicv1eN-pKRRw' className='pictures__btns-item'>Все фотки с VHS</a>
                        </div>
                    </div>
                    {(isMobile && showAquakey) || !isMobile ? (
                        <div className='pictures__layout'>
                            <h1 className='pictures__title'>AQUAKEY</h1>
                            <div className="pictures__img">
                                <LazyLoad height={200} offset={100}>
                                    <img src={aquakey1} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={aquakey2} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={aquakey3} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={aquakey4} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={aquakey5} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                            </div>
                            <a href='https://disk.yandex.ru/d/_Nr8dwjSXA2oag' className='pictures__btns-item'>Все фотки</a>
                        </div>
                    ) : null}
                    {(isMobile && showXmanera) || !isMobile ? (
                        <div className='pictures__layout'>
                            <h1 className='pictures__title'>XXXMANERA & JOSODO</h1>
                            <div className="pictures__img">
                                <LazyLoad height={200} offset={100}>
                                    <img src={people2} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={xmanera} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={xmanera1} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={josodo} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={djeban} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={desu} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={badman2} alt="" className='pictures__img-item'/>
                                </LazyLoad>
                            </div>
                            <a href='https://pulsaroren.ru/album/1551/' className='pictures__btns-item'>Все фотки</a>
                        </div>
                    ) : null}
                    {isMobile && !showXmanera && (
                        <button onClick={handleShowMore} className='pictures__toggle-btn'>
                            Загрузить еще
                        </button>
                    )}
                    {isMobile && showXmanera && (
                        <button onClick={handleShowLess} className='pictures__toggle-btn'>
                            Показать меньше
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Photos;