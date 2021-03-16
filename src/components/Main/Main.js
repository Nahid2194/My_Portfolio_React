import React from 'react';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import Galary from '../Galary/Galary';
import Skill from '../Skill/Skill';
import '../Banner/Banner.css';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <Education></Education>
            <Skill></Skill>
            <Project></Project>
            <Galary></Galary>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;