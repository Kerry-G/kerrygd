import React from 'react';


const Project  = (props) => (
    <div className="project">
        <a href={props.href} target="_blank">
            <img src={props.logo} alt={props.alt}/>
        </a>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
    </div>
);

export default Project;
