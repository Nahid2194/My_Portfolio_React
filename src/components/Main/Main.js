import React from 'react';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import Galary from '../Galary/Galary';
import NavbarCustom from '../NavbarCustom/NavbarCustom';
import Skill from '../Skill/Skill';
import '../Banner/Banner.css';
import Contact from '../Contact/Contact';
const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <Education></Education>
            <Skill></Skill>
            <Galary></Galary>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;