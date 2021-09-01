import React from 'react';

import Experience from './Experience';
import Education from './Education';

import bell from './../../../assets/bell.png'
import freezingraccoon from './../../../assets/freezingraccoon.png'
import ericsson from './../../../assets/ericsson.png'
import leadhouse from './../../../assets/leadhouse.jpg'

import esg from './../../../assets/esg.jpg'
import concordia from './../../../assets/concordia.jpg'

const experience = [
    {
        id:0,
        title: "Software Developper",
        employer: {
            name:"Ericsson",
            logo: ericsson,
            link:"https://www.ericsson.com/",
        },
        startingDate: "August 2020",
        finishingDate: "Present",
        content: ""
    },
    {
        id:0,
        title: "Software Developper",
        employer: {
            name:"Leadhouse", 
            logo: leadhouse,
            link:"https://leadhouse.ca/",
        },
        startingDate: "September 2019",
        finishingDate: "August 2020",
        content:
            " Within a small team, we develop websites and apps designed specifically" +
            " to convert conjointly with marketing campaigns"
    },
    {
        id:1,
        title: "Software Developper Intern",
        employer: {
            name:"Ericsson", 
            logo: ericsson,
            link:"https://www.ericsson.com/",
        },
        startingDate: "September 2018",
        finishingDate: "August 2019",
        content:
            "I learned a lot during my internship @ Ericsson." +
            " We modernized an internal tool " +
            " using newer technologies like Java 8, Docker, Kubernetes, Reactjs. " + 
            " It was an incredible experience."
    },
    {
        id:2,
        title: "Dev Wizard",
        employer: {
            name:"Freezing Raccoon", 
            logo: freezingraccoon,
            link:"https://www.youtube.com/watch?v=Z8-jr0ViXTg",
        },
        startingDate: "May 2017",
        finishingDate: "September 2018",
        content:
            " This is my first software developer gig. I created cloud applications for the studio." +
            " My responsibilities included building applications from the bottom" +
            " up, fashioning everything from the home page to site layout and function."
    },{
        id:3,
        title:"Sales Consultant",
        employer:{
            name:"Bell Canada Entreprises", 
            logo:bell,
            link:"https://www.bell.ca/",
        },
        startingDate:"May 2012",
        finishingDate:"May 2017",
        content:
            "This was my student job for a long time, and I am" +
            " grateful because I learned a lot about management and business culture in my 5 years with Bell."
    }
];

const experienceItem = experience.map((experience) =>
        <Experience
            key={experience.id}
            title={experience.title}
            employer={experience.employer}
            startingDate={experience.startingDate}
            finishingDate={experience.finishingDate}
            content={experience.content}
    />
);

const education = [
    {
        id:1,
        degree:"Computer Science with Distinction - Computer Games",
        school: {
            name: "Concordia University",
            logo: concordia,
            link: "http://www.concordia.ca/academics/undergraduate/computer-games.html"
        },
        startingDate: "2016",
        finishingDate: "2020",
        content:
            "Study the life cycle of software products from specification through analysis and"+
            " design, to testing maintenance and evaluation. Learn to balance large-scale"+
            " product development, with safety, reliability,  cost and scheduling."
    },{
        id:1,
        degree:"Business Technology Management",
        school: {
            name: "École des Sciences de la Gestion",
            logo: esg,
            link: "https://badm.esg.uqam.ca/"
        },
        startingDate: "2013",
        finishingDate: "2016",
        content:
            "Management training aimed at acquiring knowledge and skills in the analysis,"+
            " design, and implementation of business solutions using information technology."
    }
];

const educationItem = education.map((education) =>
        <Education
            key={education.id}
            degree={education.degree}
            school={education.school}
            startingDate={education.startingDate}
            finishingDate={education.finishingDate}
            content={education.content}
    />
);

const Container = () => (
    <div className="App-content">
        <h2>Experience</h2>
        {experienceItem}
        <h2>Education</h2>
        {educationItem}
    </div>
);

export default Container;
