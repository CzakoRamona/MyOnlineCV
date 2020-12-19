import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import paint1 from '../photos/Drawing/paint1.jpg';
import paint2 from '../photos/Drawing/paint2.jpg';
import paint3 from '../photos/Drawing/paint3.jpg';
import paint4 from '../photos/Drawing/paint4.jpg';
import paint5 from '../photos/Drawing/paint5.jpg';
import paint6 from '../photos/Drawing/paint6.jpg';
import paint7 from '../photos/Drawing/paint7.jpg';
import paint8 from '../photos/Drawing/paint8.jpg';
import paint9 from '../photos/Drawing/paint9.jpg';
import paint10 from '../photos/Drawing/paint10.jpg';
import paint11 from '../photos/Drawing/paint11.jpg';
import paint12 from '../photos/Drawing/paint12.jpg';
import paint13 from '../photos/Drawing/paint13.jpg';
import paint14 from '../photos/Drawing/paint14.jpg';
const DrawingCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint1}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint3}
                alt="slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint4}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint5}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint6}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint7}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint8}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint9}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint10}
                alt="slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint11}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint12}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint13}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={paint14}
                alt="slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default DrawingCarousel;