import React from 'react';
import Card from '../Card/Card';
import Information from '../Information/Information';
import Slider from '../Slider/Slider';
import Vlanchu from '../Vlanchu/Vlanchu';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Card></Card>
            <Information></Information>
            <Vlanchu></Vlanchu>
        </div>
    );
};

export default Home;