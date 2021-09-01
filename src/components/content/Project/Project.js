import React from 'react';


const Project  = (props) => (
    <div className="project">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <h4>{props.title}</h4>
            </a>
        <div className="img-content">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <img src={props.logo} alt={props.alt}/>
        </a>
        <p>{props.content}</p>
        </div>
    </div>
);

export default Project;
