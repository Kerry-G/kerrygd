import React from 'react';
import Java from './../../assets/java.png'
import Python from './../../assets/python.png'
import HTML from './../../assets/html.png'
import CSS3 from './../../assets/css.png'
import Javascript from './../../assets/js.png'

const Skills  = () => (
    <div className="App-content">
        <h2>Languages</h2> 
        <div id="skill-logo-set">
            <a href="https://www.java.com/" id="skill-logo">
                <img src={Java} alt="Java"/>
            </a>
            <a href="https://www.python.org/" id="skill-logo">
                <img src={Python} alt="Python"/>
            </a>
            <a href="https://www.w3.org/html/" id="skill-logo">
                <img src={HTML} alt="HTML"/>
            </a>
            <a href="https://www.w3.org/Style/CSS/" id="skill-logo">
                <img src={CSS3} alt="CSS"/>
            </a>
            <a href="https://www.javascript.com/" id="skill-logo">
                <img src={Javascript} alt="Javascript"/>
            </a>
        </div>    
        <h2>Tools</h2>
        <div id="skill-logo-set">
            <a href="" id="skill-logo"><img src="" alt="React"/></a>
            <a href="" id="skill-logo"><img src="" alt="Redux"/></a>
            <a href="" id="skill-logo"><img src="" alt="Travis"/></a>
            <a href="" id="skill-logo"><img src="" alt="Firebase"/></a>
            <a href="" id="skill-logo"><img src="" alt="Digital Ocean"/></a>
            <a href="" id="skill-logo"><img src="" alt="Sass"/></a>
            <a href="" id="skill-logo"><img src="" alt="Git"/></a>
            <a href="" id="skill-logo"><img src="" alt="Flask"/></a>
            <a href="" id="skill-logo"><img src="" alt=""/></a>
        </div>
    </div>
);

export default Skills;
