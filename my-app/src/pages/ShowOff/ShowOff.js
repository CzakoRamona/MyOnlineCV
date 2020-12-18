import React, { Component } from "react";
import "./ShowOff.css";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from "react-mdl";
import CoffeeCarousel from "../../components/photoSlider/CoffeeCarousel";
import FoodCarousel from "../../components/photoSlider/FoodCarousel";
import PlayerGame from "./PlayerGame.png";
import DrBooBoo from "./DrBooBoo.png";
import MyIMDB from "./MyIMDB.png";


class ShowOff extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div><h1>My IT projects</h1>
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
                            <CardTitle > React Project-My IMD-16.2</CardTitle>
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
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>Hobbies</h1>
                    <div className="cards-container">
                        <Card shadow={5} style={{ width: 'auto', margin: 'auto' }}>
                            <CardTitle>Photo</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                        </Card>
                        <Card shadow={5} style={{ width: 'auto', margin: 'auto' }}>
                            <CardTitle>Drawing</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>

                        </Card>
                        <Card shadow={5} style={{ width: 'auto', margin: 'auto' }}>
                            <CardTitle>Dancing</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Cats</h1>
                    <div className="cards-container">
                        <Card shadow={5} style={{ width: 'auto', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Cats</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="cards-content"><h1>Guilty pleasures...</h1>
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