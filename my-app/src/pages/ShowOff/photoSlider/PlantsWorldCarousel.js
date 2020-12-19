import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import plant1 from '../photos/PlantsWorld/plant1.jpg';
import plant2 from '../photos/PlantsWorld/plant2.jpg';
import plant3 from '../photos/PlantsWorld/plant3.jpg';
import plant4 from '../photos/PlantsWorld/plant4.jpg';
import plant5 from '../photos/PlantsWorld/plant5.jpg';
import plant6 from '../photos/PlantsWorld/plant6.jpg';
import plant7 from '../photos/PlantsWorld/plant7.jpg';
import plant8 from '../photos/PlantsWorld/plant8.jpg';
import plant9 from '../photos/PlantsWorld/plant9.jpg';
import plant10 from '../photos/PlantsWorld/plant10.jpg';
import plant11 from '../photos/PlantsWorld/plant11.jpg';
const PlantsWorldCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant1}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant3}
                alt="slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant4}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant5}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant6}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant7}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant8}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant9}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant10}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={plant11}
                alt="slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default PlantsWorldCarousel;