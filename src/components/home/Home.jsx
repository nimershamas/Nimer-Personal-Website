import React from 'react';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Particles from "react-tsparticles";
import particlesOptions from "../../particles.json";

library.add(fab, fas)
const Home = () => {

    return (
        <div>
            <Particles options={particlesOptions} />
            <section className='home-wrapper'>
                <div className='hero-description-wrapper'>
                    <div className='home-font h5'>Nimer Shamas</div>
                    <div className='home-font h1 hero-role'>I'm Software Engineer</div>
                    <div className='home-font hero-description'>Management Information Systems
                        Self-learning, Work effectively as part of a team.</div>
                    <div>
                        <ul className='hero-links-list'>
                            <a href='https://www.linkedin.com/in/nimer-shamas-4b0ab51a6/' target="_blank" className='hero-link-item'> <li className='hero-list-item-no-decoration' ><FontAwesomeIcon icon="fab fa-linkedin-in" /></li></a>
                            <a href='https://mail.google.com/mail/?view=cm&to=nemrsh1@gmail.com&body=Hello Nimer,' target="_blank" className='hero-link-item'> <li className='hero-list-item-no-decoration'><FontAwesomeIcon icon="fa-solid fa-envelope" /></li></a>
                            <a href='https://www.github.com/nimershamas/' target="_blank" className='hero-link-item'> <li className='hero-list-item-no-decoration'><FontAwesomeIcon icon="fab fa-github" /></li></a>
                        </ul>
                    </div>
                </div>
                <img src="https://themetum.com/koyta/koyta-two/assets/img/02_koyta_img/header-right.png" alt="toto" />

            </section>




        </div>




    )




}

export default Home;