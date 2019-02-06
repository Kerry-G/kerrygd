import React from 'react';
import face from '../assets/face.png'

const Header  = () => (
    <header className="App-header">
        <img src={face} alt="my-face" />
        <p className="full-name">Kerry Gougeon</p>
        <p className="description">Welcome to my website</p>
    </header>
);

export default Header;
