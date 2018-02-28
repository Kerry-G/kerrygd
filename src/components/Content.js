import React, { Component } from 'react';
import About from "./content/About";
import Experience from "./content/Experience";
import Skills from "./content/Skills";
import Projects from "./content/Projects";

class Content extends Component {

    componentDidUpdate() {
        this.el.scrollIntoView({
            block: "start",
            behavior: 'smooth'
        })
    }

    render() {
        let content = [<About />, <Experience />, <Skills />, <Projects />]
        return (
            <div className="App-content" ref={(el) => { this.el = el; }}>
                {content[this.props.active]}
            </div>
        )
    }
}

export default Content;
