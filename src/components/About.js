import React from 'react'

import GithubIcon from '../images/icons/github-icon-border.png'
import gmailIcon from '../images/icons/gmail-icon.png'
import linkedinIcon from '../images/icons/linkedln-icon.png'
import faceImg from '../images/others/face.png'

const About = () => {
    return(
        <div className="container about change-color" id="About">
            <h1>Namaste</h1>
            <div className="about-info info">
                <img className="about-img" src={faceImg} /> 
                <h2 className="about-name">Kevin Yan</h2> 
                <p>Hello! I am a web developer living in San Jose, California.  I am interested in creating beautiful web applications and solving challenging problems. On the journey, I have established a good foundation with full stack development but generally found myself fully immerse and passion with front-end development. On my free time I am always looking to improve myself with new technologies and projects.</p>
                <ul className="about-list">
                    <li>
                        <a href="mailto:k3vinyan@gmail.com" target="_blank">
                            <img src={gmailIcon} className="gmail icon" alt="gmail icon" />
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

export default About