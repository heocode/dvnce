import React from 'react';
import LazyLoad from 'react-lazyload';
import './photos.css';
import desu from '../../img/desu.webp';
import badman from '../../img/badman1.webp';
import badman1 from '../../img/badman2.webp';
import badman2 from '../../img/badman3.webp';
import people from '../../img/people.webp';
import people1 from '../../img/people2.webp';
import people2 from '../../img/people3.webp';
import xmanera from '../../img/manera1.webp';
import xmanera1 from '../../img/manera2.webp';
import xmanera2 from '../../img/manera3.webp';
import josodo from '../../img/josodo.webp';
import skywalker from '../../img/skywalker.webp';
import skywalker1 from '../../img/skywalker2.webp';
import djeban from '../../img/djeban.webp';
import group from '../../img/group.webp';

function Photos() {
    return (
        <section className='photo'>
            <div className="container">
                <div className='pictures'>
                    <h1 className='pictures__title'>XXXMANERA & JOSODO</h1>
                    <div className="pictures__img">
                        <LazyLoad height={200} offset={100}>
                            <img src={people} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={people1} alt="" className='pictures__img-item'/>
                        </LazyLoad>
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
                            <img src={xmanera2} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={josodo} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={djeban} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={skywalker} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={skywalker1} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={desu} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={badman} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={badman1} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={badman2} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                        <LazyLoad height={200} offset={100}>
                            <img src={group} alt="" className='pictures__img-item'/>
                        </LazyLoad>
                    </div>
                    <a href='https://pulsaroren.ru/album/1551/' className='pictrures__btn'>Посмотреть все фотки</a>
                </div>
            </div>
        </section>
    );
}

export default Photos;