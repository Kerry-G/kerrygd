import React from 'react';

import Project from './Project'
//logo
import montrealGo from '../../../assets/montrealGo.png'
import askEng from '../../../assets/ask-eng.png'
import home from '../../../assets/home.png'
import jamkis from '../../../assets/jamkis.png'
import unity from '../../../assets/unity.png'

//JSON of project to render
const games = [
    {
        id:5,
        title: "Safeguard The Realm!",
        href:"youtube.com/watch?v=cK3jCJUFKtU",
        logo:unity,
        alt:"safeguard-the-realm",
        content:
           "Tower defence meets auto-battler! A Game made in a team of 6 marvellous people " +
           " within Concordia's Game Development course. My focus on the development were the towers and " +
           " their interactions."
    },
    {
        id:0,
        title: "HOME",
        href:"https://jamkis.itch.io/ggj19-home",
        logo:home,
        alt:"HOME",
        content:
            "Home is a short game experience that strives to express that a home is not just a place, it's a people." +
            " Paying tribute to the ancestral societies of the north, you play as an Inuit tasked with protecting that which is most precious to them, their family." +
            " Race against the oncoming blizzard while ensuring that you and you loved ones have the essentials: shelter, food, and warmth." + 
            " Partly a time management sim with a light puzzle element added to the mix, HOME is sure to be an frenetic experience that keeps you on your toes. ",
    },
    {
        id:1,
        title: "U.N.I.T.Y.",
        href:"https://jamkis.itch.io/unity",
        logo:jamkis,
        alt:"U.N.I.T.Y.",
        content:
            "Unleash Nature Inside The Youniverse (U.N.I.T.Y.) is a local Multiplayer played with 4 controllers, each of which the player only uses the Joystick. "+
            " Players are put in an Alien arena as modified animals where they fight each other with laser. " + 
            " Any player needs to be the last standing 5 times to win." +   
            " This high pace, fast action shooter is perfect for casual local multiplayer with your friends!",
    },
    {
        id:3,
        title: "Self Care",
        href:"https://jamkis.itch.io/selfcare",
        logo:jamkis,
        alt:"Self Care",
        content:
            "Survival Game about Self Care and Social Anxiety." +
            " A reminder of why people should always take care of themselves, body and soul." + 
            " Ideally the game would be linked to twitch and the amount of spectators would increase the amount of enemies, increase the rhythm and the pressure on the player." + 
            " The more spectators, the bigger potential for a High Score!",
    },
];
const projects = [{
    id:2,
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
    id:4,
    title: "Ask-Eng",
    href:"https://github.com/Kerry-G/Ask-Eng",
    logo:askEng,
    alt:"Ask-Eng",
    content:
        "An engineering question and answer board." +
        " This project was done in a semester with a team of 8." +
        " I acted as the lead front-end developer, " +
        "and it was particularly challenging since I had to teach React " +
        "to the other front-end developers.    "
}]


const projectItem = projects.map((project) =>
        <Project
            key={project.id}
            title={project.title}
            href={project.href}
            logo={project.logo}
            alt={project.alt}
            content={project.content}
    />
);

const gamesItems = games.map((project) =>
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
        <h2>Games</h2>
        {gamesItems}
        <h2>General Projects</h2>
        {projectItem}
    </div>
);

export default Projects;
