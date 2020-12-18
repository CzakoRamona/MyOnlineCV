import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import coffee1 from '../photos/Coffee/coffee1.jpg';
import coffee2 from '../photos/Coffee/coffee2.jpg';

const CoffeeCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={coffee1}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={coffee2}
                alt="Second slide"
            />
        </Carousel.Item>


    </Carousel>
);
export default CoffeeCarousel;