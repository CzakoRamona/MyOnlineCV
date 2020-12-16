import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import food1 from '../photoSlider/Food/food1.jpg';
import food2 from '../photoSlider/Food/food2.jpg';
import food3 from '../photoSlider/Food/food3.jpg';
import food4 from '../photoSlider/Food/food4.jpg';

const FoodCarousel = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
        <Carousel plugins={['rtl', 'arrows',]}>
            <img src={food1} />
            <img src={food2} />
            <img src={food3} />
            <img src={food4} />
        </Carousel>

    </div>
);

export default FoodCarousel;
