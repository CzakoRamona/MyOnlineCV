import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import DSC_5478 from '../photoSlider/DSC_5478.jpg';
import DSC_5784 from '../photoSlider/DSC_5784.jpg';
const CoffeeCarousel = () => (
    <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
        <Carousel plugins={['rtl', 'arrows',]}>
            <img src={DSC_5478} />
            <img src={DSC_5784} />

        </Carousel>

    </div>
);

export default CoffeeCarousel;
