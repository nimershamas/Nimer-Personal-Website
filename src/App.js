import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';

function App() {


    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="app-wrapper">
            <div id='navbar'>
                <NavBar offset = {offset}></NavBar></div>
            <div id='app-home'>
                <Home/>
            </div>
            <div id='app-about'>
                <About/>
            </div>
            <div id='experience'>
            <Experience/>
            </div>

        </div>
    );
}

export default App;
