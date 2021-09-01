import React from 'react';
//logo imports
import Java from './../../assets/java.png'
import Python from './../../assets/python.png'
import HTML from './../../assets/html.png'
import CSS3 from './../../assets/css.png'
import Javascript from './../../assets/js.png'
import cpp from './../../assets/cpp.png'
import csharp from './../../assets/csharp.png'
import digitalOcean from './../../assets/do.png'
import firebase from './../../assets/firebase.png'
import git from './../../assets/git.png'
import react from './../../assets/react.png'
import redux from './../../assets/redux.png'
import sass from './../../assets/sass.png'
import travis from './../../assets/travis.png'
import flask from './../../assets/flask.png'
import nginx from './../../assets/nginx.png'
import jest from './../../assets/jest.png'
import ubuntu from './../../assets/ubuntu.png'
import vs_code from './../../assets/vs_code.png'
import unity from './../../assets/unity.png'

const Skills  = () => (
    <div className="App-content">
        <h2>Languages</h2> 
        <div className="skill-logo-set">
            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" ><img src={Java} alt="Java"/></a>
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src={Python} alt="Python"/></a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer"><img src={HTML} alt="HTML"/></a>
            <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer"><img src={CSS3} alt="CSS"/></a>
            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img src={Javascript} alt="Javascript"/></a>
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/" target="_blank" rel="noopener noreferrer"><img src={csharp} alt="Csharp"/></a>
            <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer"><img src={cpp} alt="cpp"/></a>
            
        </div>    
        <h2>Tools</h2>
        <div className="skill-logo-set">
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><img src={react} alt="React"/></a>
            <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer"> <img src={redux} alt="Redux"/></a>
            <a href="https://travis-ci.org" target="_blank" rel="noopener noreferrer"> <img src={travis} alt="Travis"/></a>
            <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer"> <img src={firebase} alt="Firebase"/></a>
            <a href="https://www.digitalocean.com" target="_blank" rel="noopener noreferrer"> <img src={digitalOcean} alt="Digital Ocean"/></a>
            <a href="http://sass-lang.com" target="_blank" rel="noopener noreferrer"> <img src={sass} alt="Sass"/></a>
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer"> <img src={git} alt="Git"/></a>
            <a href="https://unity.com/" target="_blank" rel="noopener noreferrer"> <img src={unity} alt="Unity"/></a>
            <a href="http://flask.pocoo.org" target="_blank" rel="noopener noreferrer"> <img src={flask} alt="Flask"/></a>
            <a href="http://nginx.org" target="_blank" rel="noopener noreferrer"> <img src={nginx} alt="nginx"/></a>
            <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"> <img src={jest} alt="Jest"/></a>
            <a href="https://www.ubuntu.com/" target="_blank" rel="noopener noreferrer"> <img src={ubuntu} alt="Ubuntu"/></a>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"> <img src={vs_code} alt="Visual Studio Code"/></a>
        </div>
    </div>
);

export default Skills;
