import React from 'react';


const Experience  = (props) => (
    <div className="experience">
        <div className="experience-content">
            <a href={props.employer.link} target="_blank" rel="noopener noreferrer">
                <img src={props.employer.logo} alt={props.employer.name}/>
            </a>
            <div>
            <a href={props.employer.link} target="_blank" rel="noopener noreferrer">
                <h4>{props.title} @ {props.employer.name}</h4>
                </a>
                <h5>{props.startingDate} - {props.finishingDate}</h5>
            </div>
        </div>
        <p>{props.content}</p>
    </div>
);

export default Experience;
