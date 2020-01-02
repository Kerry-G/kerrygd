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
            name:"Leadhouse", 
            logo: leadhouse,
            link:"https://leadhouse.ca/",
        },
        startingDate: "September 2019",
        finishingDate: "Present",
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
            " Within a team of four people, we modernized an internal tool " +
            " using newer technologies like Java 8, Docker, Kubernetes, Reactjs. " + 
            " It was an incredible experience."
    },
    {
        id:2,
        title: "Dev Wizard",
        employer: {
            name:"Freezing Raccoon", 
            logo: freezingraccoon,
            link:"https://www.theforgearena.com/",
        },
        startingDate: "May 2017",
        finishingDate: "September 2018",
        content:
            "My main role at Freezing Raccoon is to develop web applications for the studio." +
            " My responsibilities include building applications from the bottom" +
            " up, fashioning everything from the home page to site layout and function." + 
            " On the side, I optimize Freezing Raccoon's delivery pipeline."
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
            "As a sales consultant, my role was to meet and exceed monthly sales target as"+
            " well as exceed customers’ expectations, learn and understand the products,"+
            " services and promotional offerings, and act as an ambassador by professionally"+
            " representing the brand. This was my student job for a long time, and I am" +
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
        degree:"Computer Games",
        school: {
            name: "Concordia University",
            logo: concordia,
            link: "http://www.concordia.ca/academics/undergraduate/computer-games.html"
        },
        startingDate: "2016",
        finishingDate: "Present",
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
