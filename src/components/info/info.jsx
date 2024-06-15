import './info.css'
import groupImg from '../../img/group.png'

function Info() {
    return(
        <main id="main">
            <div className='container'>
                <div className='info'>
                    <div className='info__text'>
                        <h1 className='info__text-title'>DANCE</h1>
                        <h3 className='info__text-subtitle'>Организация, которая занимается проведением мероприятий в разных городах.<br/><span style={{color: 'rgb(227, 227, 227)'}}><i><span style={{color: '#d00040'}}>DANCE</span> - это не просто танец, но и стиль жизни. Присоединяйся к нам и стань частью этой огромной семьи</i></span></h3>
                        <div className='info__btns'>
                            <a href="https://t.me/dvnce_events" className='info__btn-item'><button>Мы в телеграмме</button></a>
                            <a href="https://vk.com/dvnce_events" className='info__btn-item'><button>Мы во вконтакте</button></a>
                        </div>
                    </div>
                    <img src={groupImg} alt="" className='info__img'/>
                </div>
            </div>
        </main>
    )
}

export default Info