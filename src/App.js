import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loader from './components/loader/loader';
import Header from './components/header/header';
import Info from './components/info/info';
import Afishes from './components/afishes/afishes';
import Questions from './components/questions/ques';
import Footer from './components/footer/footer';
import About from './components/about/about';
import ScrollToTop from './components/scrolltotop';
import Photos from './components/photos/photos';

function App() {
    const [showIntro, setShowIntro] = useState(() => {
        const introShown = sessionStorage.getItem('introShown');
        return introShown ? false : true;
    });

    useEffect(() => {
        if (showIntro) {
            const timer = setTimeout(() => {
                setShowIntro(false);
                sessionStorage.setItem('introShown', 'true');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showIntro]);

    useEffect(() => {
        if (showIntro) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }
    }, [showIntro]);

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Loader showIntro={showIntro} />
                <div className={`content ${showIntro ? 'hide' : 'show'}`}>
                    <Header />
                    <Routes>
                        <Route path="/events/:eventId" element={<About />} />
                        <Route path="/" element={<MainContent />} />
                        <Route path="/photos" element={<Photos />} />
                    </Routes>
                    <Questions />
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

function MainContent() {
    return (
        <>
            <Info />
            <Afishes />
        </>
    );
}

export default App;