
import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CarouselPhoto = () => (
    <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
        <Carousel plugins={['rtl', 'arrows',]}>
            <img src={imageOne} />
            <img src={imageTwo} />
            <img src={imageThree} />
        </Carousel>

    </div>
);

export default CarouselPhoto;

