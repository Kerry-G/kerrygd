import React from 'react';


const Education  = (props) => (
    <div className="education">
        <div className="img-content">
            <a href={props.school.link} target="_blank" rel="noopener noreferrer">
                <img src={props.school.logo} alt={props.school.name}/>
            </a>
            <div>
                <h4>{props.school.name}</h4>
                <h5>{props.degree} <span>({props.startingDate} - {props.finishingDate})</span></h5>
            </div>
        </div>
        <p>{props.content}</p>
    </div>
);

export default Education;
