import React from 'react';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import Education from '../Education/Education';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <NavbarCustom></NavbarCustom>
            <Details></Details>
            <Education></Education>
        </div>
    );
};

export default Main;