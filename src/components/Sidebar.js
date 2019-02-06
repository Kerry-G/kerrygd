import React from 'react';

const Sidebar  = (props) => (
    <aside className="App-sidebar">
        <button type="button" onClick={() => props.handleClick(0)} className={props.active === 0 ? "active":""} id="About">About me</button>
        <button type="button" onClick={() => props.handleClick(1)} className={props.active === 1 ? "active":""} id="Experience">Experience & Education</button>
        <button type="button" onClick={() => props.handleClick(2)} className={props.active === 2 ? "active":""} id="Skills">Skills & Abilities</button>
        <button type="button" onClick={() => props.handleClick(3)} className={props.active === 3 ? "active":""} id="Project">Personal Project</button>
    </aside>
);

export default Sidebar;
