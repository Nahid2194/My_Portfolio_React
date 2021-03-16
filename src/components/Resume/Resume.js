import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Information from '../Information/Information';
import Skill from '../Skill/Skill';

const Resume = () => {
    return (
        <div>
            <Information></Information>
            <Skill></Skill>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Resume;