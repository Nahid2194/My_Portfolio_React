import React from 'react';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <NavbarCustom></NavbarCustom>
            <Details></Details>
        </div>
    );
};

export default Main;