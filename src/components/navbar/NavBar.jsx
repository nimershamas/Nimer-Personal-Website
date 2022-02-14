import "./NavBar.css"
import React from "react";


const NavBar = (props) => {
    let { offset } = props;
    const handleScrollTo = (scrollTo) => {
        window.scrollTo({
            top: scrollTo,
            left: 0,
            behavior: 'smooth'
        });
    }
    const handleNav = (navigateTo) => {
        if (navigateTo === "home") {
            handleScrollTo(0)
        }
        else if (navigateTo === "about") {
            handleScrollTo(680)

        }
        else if (navigateTo === "experience") {
            handleScrollTo(1450)
        }
        else if (navigateTo === "recommendations") {
            handleScrollTo(1600)
        }
    }

    return (
        <div>
            <nav className={offset > 605 ? "navbar-wrapper scrolling" : 'navbar-wrapper'}>
                <ul className='navbar-items-wrapper' >
                    <li onClick={() => handleNav("home")} className={offset >= 0 && offset < 600 ? 'navbar-item active-navigation' : "navbar-item"}>Home</li>
                    <li onClick={() => handleNav("about")} className={offset > 600 && offset < 1450 ? 'navbar-item active-navigation' : "navbar-item"}>About</li>
                    <li onClick={() => handleNav("experience")} className={offset > 1450 && offset < 1800 ? 'navbar-item active-navigation' : "navbar-item"}>Experience</li>
                    {/* <li onClick={() => handleNav("recommendations")} className={offset > 1800 && offset < 2400 ? 'navbar-item active-navigation' : "navbar-item"}>Recommendations</li> */}
                </ul>
            </nav>







        </div>




    )




}

export default NavBar;