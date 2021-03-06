import React, { Component } from "react";
import "./ShowOff.css";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button } from "react-mdl";
import CoffeeCarousel from "./photoSlider/CoffeeCarousel";
import FoodCarousel from "./photoSlider/FoodCarousel";
import CatsCarousel from "./photoSlider/CatsCarousel";
import PlantsWorldCarousel from "./photoSlider/PlantsWorldCarousel";
import LandscapeCarousel from "./photoSlider/LandscapeCarousel";
import AnimalWorldCarousel from "./photoSlider/AnimalWorldCarousel";
import DrawingCarousel from "./photoSlider/DrawingCarousel";
import DancingCarousel from "./photoSlider/DancingCarousel";
import PlayerGame from "./photos/Projects/PlayerGame.png";
import DrBooBoo from "./photos/Projects/DrBooBoo.png";
import MyIMDB from "./photos/Projects/MyIMDB.png";


class ShowOff extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <div className="cards-container">
                        <Card shadow={5} style={{ width: '600px', height: "600px", margin: 'auto' }}>
                            <CardTitle > My first IT project-DrBooBoo page</CardTitle>
                            <div className="project-photo" >
                                <img src={DrBooBoo} alt="first project" />
                            </div>

                            <CardText> This was my first project, a basic blog page.I used elementary HTML and CSS elements with styling:
                            background image,textbox, radio buttons, checkbox, button,dropdown list , hyperlink etc.
                        </CardText>
                            <CardActions border>
                                <a href="https://github.com/CzakoRamona/DrBooBooProject" rel="noopener noreferrer" target="_blank">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>

                        </Card>
                        <Card shadow={5} style={{ width: '600px', height: "600px", margin: 'auto' }}>
                            <CardTitle >PlayerGame</CardTitle>
                            <div className="project-photo" >
                                <img src={PlayerGame} alt="player game" />
                            </div>
                            <CardText>
                                In this project I used JavaScript ES6 and OOP style.
                                The Player(the red square) smoothly moves across the screen utilizing keyboard input,
                                and can't go outside the Game Container(the black square).
                        </CardText>
                            <CardActions border>
                                <a href="https://github.com/CzakoRamona/PlayerGame" rel="noopener noreferrer" target="_blank">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>

                        </Card>
                        <Card shadow={5} style={{ width: '600px', height: "600px", margin: 'auto' }}>
                            <CardTitle > React Project-My IMDB-16.2</CardTitle>
                            <div className="project-photo" >
                                <img src={MyIMDB} alt="IMDB-like app" />
                            </div>
                            <CardText>
                                We built a complete front-end app using React, that lets the user find and display information about their favorite movies.I worked mainly at the design,search component and pagination.
                        </CardText>
                            <CardActions border>
                                <a href="https://github.com/razvantimis/myIMDB-16.2" rel="noopener noreferrer" target="_blank">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>


                        </Card>


                    </div>
                    <h5>My path in IT started in May 2020, driven by curiosity and the need for a new beginning.These projects are just a small part of the workshops I did in informal school courses. </h5>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>Hobbies</h1>
                    <div className="cards-container">
                        <div className="slides-container">
                            <div className="photo-slides-container">
                                <CardTitle >My Photos</CardTitle>
                                <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                                    <CardTitle ><h5>Plants World</h5></CardTitle>
                                    <PlantsWorldCarousel />
                                </Card>

                                <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                                    <CardTitle ><h5>Landscape</h5></CardTitle>
                                    <LandscapeCarousel /></Card>

                                <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                                    <CardTitle ><h5>Animal World</h5></CardTitle>
                                    <AnimalWorldCarousel /></Card>
                            </div>
                            <CardTitle >And more...</CardTitle>
                            <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                                <CardTitle>Drawing...</CardTitle>
                                <DrawingCarousel />
                            </Card>
                            <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                                <CardTitle>Dancing</CardTitle>
                                <DancingCarousel />
                            </Card>
                        </div>
                    </div >
                </div >
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="cards-content">
                    <div className="cards-container">
                        <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                            <CardTitle style={{ fontSize: "auto", color: " #c06c84 " }}>Cats</CardTitle>
                            <CatsCarousel />
                        </Card>
                    </div>
                    <h5>Cats,the most intelligent and independent animals</h5>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="cards-content">
                    <div className="cards-container" >
                        <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                            <CardTitle style={{ fontSize: "auto", color: " #c06c84 " }}>Coffee</CardTitle>
                            <CoffeeCarousel />
                        </Card>
                        <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }}>
                            <CardTitle style={{ color: " #c06c84 " }}>Good food</CardTitle>
                            <FoodCarousel />
                        </Card>
                    </div >
                    <h5>Guilty pleasures...but, a good coffee and a tasty meal can make difficult times easier.</h5>
                </div >
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>IT Projects</Tab>
                    <Tab>Hobbies:Photos/Drawing/Dancing</Tab>
                    <Tab>Favorite animal</Tab>
                    <Tab>Guilty pleasures...</Tab>

                </Tabs>
                <section className="showOff-grid">
                    <Grid className="showOff-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default ShowOff;