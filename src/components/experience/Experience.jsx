import React from 'react';
import "./Experience.css"
import ExperienceCard from '../experience-card/ExperienceCard';


const Experience = () => {
    

    return (
        <div className='experience-main-wrapper'>
            <section>
                <div className='section-title'>
                    Experience
                </div>
                <div>
                    <ExperienceCard/>
                </div>
            </section>
        </div>



    )




}

export default Experience;