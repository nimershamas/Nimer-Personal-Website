import React, { useEffect } from 'react';
import "./ExperienceCard.css"
import vlancerlogo from "../../images/vlancerlogo.png" 
import delllogo from "../../images/delllogo.png" 


const ExperienceCard = (props) => {
    const data = [{picture:"https://media-exp1.licdn.com/dms/image/C4D0BAQEFYQ6dKGdx4w/company-logo_200_200/0/1538503791441?e=1652918400&v=beta&t=LsNRceFOVtsWmUykeUJoroZlzQ9pU5ecFHLyqxSXOro", 
    title:"Automation Engineer At T-Rex",
     period:"04/2020 - Present", description:"Test Automation Engineer in Python, Selenium, PyTest, desigining test infrastructure, implementing and maintaining test scripts", website:"https://www.trexgroup.com"}, 
     {picture:vlancerlogo, 
     title:"Full Stack Developer",
      period:"11/2019 - 04/2020", description:"Internship", website:"https://www.linkedin.com/company/vlancer/"}
      , 
      {picture:delllogo, 
      title:"Full Stack Bootcamp",
       period:"07/2019 - 09/2019", description:"Practical training course operated by Tsofen organization, in cooperation with Dell and IITC collage, led by Tal Yaron, totaling 300 academic hours, including React.js and Node.js with MongoDB in Agile teams", website:"www.dell.com"}]

    return (
        <div className='experience-container'>
            {data.length > 0 && data.map((experience, index) => {
                return (

                    <div key={index} className="container">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={experience.picture} />
                                    <h3>{experience.title}</h3>
                                    <h4>{experience.period}</h4>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>{experience.description}</p>
                                    <a className='link-button' href={experience.website} target="_blank" >Visit Website</a>
                                </div>
                            </div>
                        </div>

                    </div>)
            })}
        </div >
    )
}
export default ExperienceCard;