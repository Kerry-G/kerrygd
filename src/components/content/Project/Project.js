import React from 'react';


const Project  = (props) => (
    <div className="project">
        <h4>{props.title}</h4>
        <div className="project-content">
        <a href={props.href} target="_blank">
            <img src={props.logo} alt={props.alt}/>
        </a>
        <p>{props.content}</p>
        </div>
    </div>
);

export default Project;
