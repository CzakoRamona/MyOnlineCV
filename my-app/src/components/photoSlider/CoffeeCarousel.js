import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import coffee1 from '../photoSlider/coffee1.jpg';
import coffee2 from '../photoSlider/coffee2.jpg';
const CoffeeCarousel = () => (
    <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
        <Carousel plugins={['rtl', 'arrows',]}>
            <img src={coffee1} />
            <img src={coffee2} />

        </Carousel>

    </div>
);

export default CoffeeCarousel;
