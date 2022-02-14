import React from 'react';
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const About = () => {

    return (
        <div className='about-main-wrapper'>

            <section>
                <div className='section-title'>
                    About
                </div>
                <div className='about-wrapper'>
                    <div className='about-image-container'>
                        <img src="https://themetum.com/koyta/koyta-two/assets/img/02_koyta_img/header-right.png" alt="toto" />
                    </div>
                    <div className='about-description'>
                        <div className='about-font about-me'>About Me</div>
                        <div className='about-font about-name'>Hi there, I’m Nimer Shamas</div>
                        <div className='about-font about-role'>Software Engineer | Automation Engineer</div>
                        <div className='about-font languages'>You can find me working with Java, Python, JavaScript, React, Node, SQL, MongoDB.</div>
                        <div className='about-font'>I live and breathe code! 👨‍💻 </div> 
                        <div className='about-font'>I love building new things! 🔧</div>
                        <div className='about-font'>I love collaborating with others! 🧑🏾‍🤝‍🧑🏽</div>  
                        <div className='about-font'>I love learning new technologies! 🆕</div> 
                        <div className='about-font'>I love solving complex problems! 👨🏻‍💻</div> 
                        <div className='about-font'>I love games! 🎮</div> 
                        <div className='about-font'>I love traveling! ✈️</div>
                        <a href='https://www.dropbox.com/s/alywb8p35tgxe5j/%D7%A0%D7%99%D7%9E%D7%A8-%D7%A9%D7%9E%D7%90%D7%A1%20%D7%A7%D7%95%D7%A8%D7%95%D7%AA%20%D7%97%D7%99%D7%99%D7%9D.pdf?dl=1' className='link-button'> Download CSV <FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" /> </a>

                    </div>
                </div>

            </section>



        </div>




    )




}

export default About;