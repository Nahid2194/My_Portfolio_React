import React from 'react';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import Education from '../Education/Education';
import NavbarCustom from '../NavbarCustom/NavbarCustom';
import Skill from '../Skill/Skill';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <Education></Education>
            <Skill></Skill>
        </div>
    );
};

export default Main;