import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
    return (
        <header className="header">
            <h1>Jessica Gonnella</h1>
            <h2>No Shapes, No Colors, No Design Portfolio</h2>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/resume.pdf" download>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;