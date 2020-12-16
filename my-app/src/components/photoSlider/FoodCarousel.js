import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import food1 from '../photoSlider/Food/food1.jpg';
import food2 from '../photoSlider/Food/food2.jpg';
import food3 from '../photoSlider/Food/food3.jpg';
import food4 from '../photoSlider/Food/food4.jpg';
import food5 from '../photoSlider/Food/food5.jpg';
import food6 from '../photoSlider/Food/food6.jpg';
import food7 from '../photoSlider/Food/food7.jpg';
const FoodCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={food6}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={food2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={food3}
                alt="slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={food4}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={food5}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={food1}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={food7}
                alt="slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default FoodCarousel;
