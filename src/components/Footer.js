import React from "react";
import linkedIn from './images/icons/linkedin.png';
import github from './images/icons/github.png';
import iglogo from './images/icons/instagram.png';


const Footer = () => {
    return(
        <footer className="social">
                <a href="https://www.linkedin.com/in/benigno-ortega/" >
                    <img src={linkedIn} alt="LinkedIn icon" className="social-icons"/>
                </a>

                <a href="https://github.com/obenny23" className="social-link">
                    <img src={github} alt="Github icon" className="social-icons"/>
                </a>

                <a href="https://instagram.com/" className="social-link">
                    <img src={iglogo} alt="Instagram icon" className="social-icons"/>
                </a>
        </footer>
    )
    
};

export default Footer;