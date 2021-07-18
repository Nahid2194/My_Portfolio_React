import React from 'react';
import Contact from '../Contact/Contact';
//import Footer from '../Footer/Footer';
import Information from '../Information/Information';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';

const Resume = () => {
    return (
        <div>
            <Information></Information>
            <Project></Project>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Resume;