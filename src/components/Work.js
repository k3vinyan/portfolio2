import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import githubIcon from '../images/github-icon2.png'
import leagueIcon from '../images/league-icon.svg'
import codepenIcon from '../images/codepen-icon.png'


const defaultProjects = [
    {
        title: "Hack1n-Slash",
        description: "Gamified coding application that allows users to improve their accuracy and speed while writing code based offof code samples fetched from public GitHub repository.",
        githubLink: "https://github.com/hdngo/TeamHACKIN",
        appLink: "https://hack1n-slash.herokuapp.com/",
        appIcon: "https://via.placeholder.com/50" 
    },
    {
        title: "League Champions Lookup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        githubLink: "",
        appLink: leagueIcon,
        appIcon: leagueIcon
    },
    {
        title: "flashcard",
        description: "Ipsum veniam incididunt voluptate enim laborum occaecat eiusmod dolore aliqua magna duis nostrud.",
        githubLink: "",
        appLink: "",
        appIcon: "https://via.placeholder.com/50"
    },
    {
        title: "Code Pen Projects",
        description: "Commodo eiusmod ut irure proident fugiat consectetur duis.",
        githubLink: "",
        appLink: "https://codepen.io/dashboard/",
        appIcon: codepenIcon
    }
]

const Project = ( {title, description, githubLink, appLink, appIcon} ) => {

    return(
        <div className="container project change-color">
            <img className="project-image" src="https://via.placeholder.com/100"/>
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
             <p>{description}</p>
            </div>
        </div>
    )
}

const Work = ({projects}) => {
    const work = defaultProjects || projects;

    return(
        <div className="container work" id="Projects">
            {/* <h1>Projects</h1> */}
            {work.map( ({title, description, githubLink, appLink, appIcon}) => 
                <Project 
                    key ={uuidv4()} 
                    title={title} 
                    description={description} 
                    githubLink={githubLink}
                    appLink={appLink}
                    appIcon={appIcon}
                />
            )}
        </div>
    )
}

export default Work