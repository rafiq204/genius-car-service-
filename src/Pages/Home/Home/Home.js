import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../Banner/Banner';
import Experts from '../../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div>
             <Helmet title="Home-Genius car"></Helmet>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;