import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import animal1 from '../photos/AnimalWorld/animal1.jpg';
import animal2 from '../photos/AnimalWorld/animal2.jpg';
import animal4 from '../photos/AnimalWorld/animal4.jpg';
import animal5 from '../photos/AnimalWorld/animal5.jpg';
import animal6 from '../photos/AnimalWorld/animal6.jpg';
import animal7 from '../photos/AnimalWorld/animal7.jpg';
import animal8 from '../photos/AnimalWorld/animal8.jpg';
import animal9 from '../photos/AnimalWorld/animal9.jpg';
import animal10 from '../photos/AnimalWorld/animal10.jpg';
import animal11 from '../photos/AnimalWorld/animal11.jpg';
import animal12 from '../photos/AnimalWorld/animal12.jpg'
import animal13 from '../photos/AnimalWorld/animal13.jpg';
import animal14 from '../photos/AnimalWorld/animal14.jpg';
import animal15 from '../photos/AnimalWorld/animal15.jpg';

const AnimalWorldCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal1}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal2}
                alt="Second slide"
            />
        </Carousel.Item>


        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal4}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal5}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal6}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal7}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal8}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal9}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal10}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal11}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal12}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal13}
                alt="slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal14}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal15}
                alt="slide"
            />
        </Carousel.Item>

    </Carousel>
);

export default AnimalWorldCarousel;
