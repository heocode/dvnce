import './aboutpage.css'
import { Link } from 'react-router-dom';

function Aboutpage({ aboutTitle, aboutText, aboutSrc, aboutBtn, aboutImg }) {
    const isExternalLink = (url) => {
        return url.startsWith('http') || url.startsWith('www');
    };

    return(
        <div className='aboutpage'>
            <div className='aboutpage__list'>
                <h1 className='aboutpage__list-title'>{aboutTitle}</h1>
                <p className='aboutpage__list-text'>{aboutText}</p>
                {isExternalLink(aboutSrc) ? (
                    <a href={aboutSrc} className='aboutpage__list-btn'>{aboutBtn}</a>
                ) : (
                    <Link to={aboutSrc} className='aboutpage__list-btn'>{aboutBtn}</Link>
                )}
            </div>
            <img src={aboutImg} alt="" className='aboutpage-img'/>
        </div>
    )
}

export default Aboutpage