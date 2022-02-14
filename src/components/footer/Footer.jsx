import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const Footer = () => {
    return (
        <div className="footer_wrapper">
                <footer className='footer_info'>
                    <h4>Made with 💙 by Nimer Shamas</h4>
                </footer>
        </div>
    )



}

export default Footer;