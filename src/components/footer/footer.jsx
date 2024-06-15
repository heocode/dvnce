import './footer.css'
import vk from '../../img/vk.svg'
import youtube from '../../img/youtube.svg'
import telegram from '../../img/telegram.svg'

function Footer() {
    return (
        <footer className='footer' id='footer'>
            <div className="container">
                <div className="contacts">
                    <a href="https://vk.com/dvnce_events" className='contact__link'>
                        <div className='contact__list'>
                            <img src={vk} alt="" className='contact__list-img'/>
                            <h2 className='contact__list-item'>@dvnce_events</h2>
                        </div>
                    </a>
                    <a href="https://t.me/dvnce_events" className='contact__link'>
                        <div className='contact__list'>
                            <img src={telegram} alt="" className='contact__list-img'/>
                            <h2 className='contact__list-item'>@dvnce_events</h2>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/@dvnce_events" className='contact__link'>
                        <div className='contact__list'>
                            <img src={youtube} alt="" className='contact__list-img'/>
                            <h2 className='contact__list-item'>@dvnce_events</h2>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;