import React from 'react';
import face from '../assets/face.jpg'

const Header  = () => (
    <header className="App-header">
        <img src={face} alt="my-face" />
        <p className="full-name">Kerry Gougeon Ducharme</p>
        <p className="description">Welcome to my website</p>
    </header>
);

export default Header;
