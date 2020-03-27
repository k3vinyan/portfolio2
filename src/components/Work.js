import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import leagueDesktop from '../images/projects/league/league-desktop-1.png'
import leagueMobile from'../images/projects/league/league-mobile-1.png'
import leagueIcon from '../images/icons/league-icon.svg'

import flashcardDesktop from '../images/projects/flashcards/flashcards-desktop-1.png'
import flashcardMobile from '../images/projects/flashcards/flashcards-mobile-1.png'
import flashcardIcon from '../images/icons/flashcard-icon.png'


import codepenDesktop from '../images/projects/codepen/codepen-desktop-1.png'
import codepenIcon from '../images/icons/codepen-icon.png'

import hackinDesktop from '../images/projects/hackinslash/hackin-desktop-1.png'
import hackinIcon from '../images/icons/hackin-icon.png'

import githubIcon from '../images/icons/github-icon-border.png'

const defaultProjects = [
    {
        title: "League Champions Lookup",
        description: ["A web application that uses Riot Games' Data Dragon api allowing users to search their favorite league of legend champion and see their stats, lore, and many more."],
        githubLink: "https://github.com/k3vinyan/league-Search",
        appLink: "https://leaguelookup.herokuapp.com/",
        technologies: ["React", "Webpack", "JavaScript", "CSS", "HTML5", "SCSS"],
        appImage: {
            desktop: leagueDesktop,
            mobile: leagueMobile
        },
        appIcon: leagueIcon
    },
    {
        title: "F-cards",
        description: ["A web application that allows users to create flashcards.  Testing portion is still in progress!  Sorry for the inconvenience"],
        githubLink: "https://github.com/k3vinyan/codepen-projects",
        technologies: ["Vue", "Express", "MongoDB", "Mongoose", "JavaScript", "CSS", "HTML5", "SCSS"],
        appImage: {
            desktop: flashcardDesktop,
            mobile: flashcardMobile
        },
        appLink: "need links",
        appIcon: flashcardIcon
    },
    {
        title: "Code Pen Projects",
        description: ["Mini Projects using vanilla languages with a focus on front-end development"],
        githubLink: "https://github.com/k3vinyan/codepen-projects",
        technologies: ["JavaScript", "CSS", "HTML5"],
        appImage: {
            desktop: codepenDesktop,
            mobile: null
        },
        appLink: "https://codepen.io/dashboard/",
        appIcon: codepenIcon
    },
    {
        title: "Hack1n-Slash",
        description: ["Gamified coding application that allows users to improve their accuracy and speed while writing code based offof code samples fetched from public GitHub repository."],
        githubLink: "https://github.com/hdngo/TeamHACKIN",
        technologies: ["Ruby", "HTML", "CSS", "JAVASCRIPT", "JQuery"],
        appLink: "https://hack1n-slash.herokuapp.com/",
        appImage: {
            desktop: hackinDesktop,
            mobile: null
        },
        appLink: "https://hack1n-slash.herokuapp.com/",
        appIcon: hackinIcon 
    }
]

const Project = ( {title, description, technologies, githubLink, appLink, appImage, appIcon, heading} ) => {
    const { desktop, mobile } = appImage 

    return(
        <div className="container project change-color">
            {heading ? <h1 className="project-heading">{heading}</h1> : ""}
            <img className="project-image" src={desktop} />
            <div className="project-info info">
            <h2>{title}</h2>
            <div className="project-info-link">
                <a href={githubLink}>
                    <img src={githubIcon} className="icon" alt="github icon"/>  
                </a>
                <a href={appLink}>
                    <img className="icon" src={appIcon} alt="app icon"/>
                    </a>
            </div>
                <p className="project-description">{description}</p>
                <p className="project-technologies">Technologies: {technologies.join(", ")}</p>
            </div>
        </div>
    )
}

const Work = ({projects}) => {
    const work = defaultProjects || projects;

    return(
        <div className="container work" id="Projects">
            {work.map( ({title, description, technologies, githubLink, appLink, appImage, appIcon}, i) => {
                return i === 0 ?
                    <Project 
                    key ={uuidv4()} 
                    title={title} 
                    description={description} 
                    technologies={technologies}
                    githubLink={githubLink}
                    appLink={appLink}
                    appImage={appImage}
                    appIcon={appIcon}
                    heading = "Projects"
                    />
                    :
                    <Project 
                        key ={uuidv4()} 
                        title={title} 
                        description={description} 
                        technologies={technologies}
                        githubLink={githubLink}
                        appLink={appLink}
                        appImage={appImage}
                        appIcon={appIcon}
                    />

            }
                
            )}
        </div>
    )
}

export default Work