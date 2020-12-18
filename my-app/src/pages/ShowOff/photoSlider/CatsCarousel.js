import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cat1 from '../photos/Cats/cat1.jpg';
import cat2 from '../photos/Cats/cat2.jpg';
import cat3 from '../photos/Cats/cat3.jpg';
import cat4 from '../photos/Cats/cat4.jpg';
import cat5 from '../photos/Cats/cat5.jpg';
import cat6 from '../photos/Cats/cat6.jpg';
import cat7 from '../photos/Cats/cat7.jpg';
import cat8 from '../photos/Cats/cat8.jpg';
import cat9 from '../photos/Cats/cat9.jpg';
const CatsCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat1}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat3}
                alt="slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat4}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat5}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat6}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat7}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat8}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={cat9}
                alt="slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default CatsCarousel;
