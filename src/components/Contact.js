import React from 'react'


import linkedinIcon from '../images/linkedin-icon.jpg'
import GithubIcon from '../images/github-icon2.png'
import gmailIcon from '../images/gmail-icon.jpg'

const Contact = () => {
    return(
        <div className="container contact change-color" id="Contact">
            <h1 className="contact-header">Contact</h1>
            <div className="contact-info info">
                <img  className="contact-img" src="http://via.placeholder.com/100" /> 
                <h2 className="contact-name">Makeven Yan</h2>   
                <ul className="contact-list">
                    <li>
                        <a href="mailto:k3vinyan@gmail.com" target="_blank">
                            <img src={gmailIcon} className="icon" alt="gmail icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/k3vinyan" target="_blank">
                            <img src={GithubIcon} className="icon" alt="github icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/k3vinyan" target="_blank">
                            <img src={linkedinIcon} className="icon" alt="linkedin icon" />
                        </a>
                    </li>
                </ul>
           </div> 
        </div>
    )
}

export default Contact