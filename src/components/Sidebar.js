import React from 'react';

const Sidebar  = (props) => (
    <aside className="App-sidebar">
        <a onClick={() => props.handleClick(0)} className={props.active === 0 ? "active":""} id="About">About me</a>
        <a onClick={() => props.handleClick(1)} className={props.active === 1 ? "active":""} id="Experience">Experience & Education</a>
        <a onClick={() => props.handleClick(2)} className={props.active === 2 ? "active":""} id="Skills">Skills & Abilities</a>
        <a onClick={() => props.handleClick(3)} className={props.active === 3 ? "active":""} id="Project">Personal Project</a>
    </aside>
);

export default Sidebar;
