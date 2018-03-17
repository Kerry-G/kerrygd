import React from 'react';

import Project from './Project'
//logo
import montrealGo from '../../../assets/montrealGo.png'
import askEng from '../../../assets/ask-eng.png'

//JSON of project to render
const project = [
    {
        id:1,
        title: "Montreal Go",
        href:"https://github.com/Kerry-G/MontrealGo",
        logo:montrealGo,
        alt:"MontrealGo",
        content:
            "An informative bot for messenger that gives insight on Montreal." +
            " MontrealGo was made in a week-end for Hackatown 2017." +
            " It was an interesting project since we had to get familiar" +
            " with several APIs quickly to get it running." +
            " I personally think that Messenger is an incredible platform" +
            " for business and it is not used enough.",
    },
    {
        id:2,
        title: "Ask-Eng",
        href:"https://github.com/Kerry-G/Ask-Eng",
        logo:askEng,
        alt:"Ask-Eng",
        content:
            "An engineering question and answer board." +
            " This project was done in a semester with a team of 8 marvelous people." +
            " I acted as the lead front-end developer, " +
            "and it was particularly challenging since I had to teach React " +
            "to the other front-end developers.    "
    },
];

const projectItem = project.map((project) =>
        <Project
            key={project.id}
            title={project.title}
            href={project.href}
            logo={project.logo}
            alt={project.alt}
            content={project.content}
    />
);

const Projects  = () => (
    <div className="App-content">
        <h2>Projects</h2>
        {projectItem}
    </div>
);

export default Projects;
