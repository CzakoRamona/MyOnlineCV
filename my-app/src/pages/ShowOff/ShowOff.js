import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from "react-mdl";
import CoffeeCarousel from "../../components/photoSlider/CoffeeCarousel";
import FoodCarousel from "../../components/photoSlider/FoodCarousel";

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
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}> React Project-My IMD-16.2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                            <CardActions border>
                                <a href="https://github.com/razvantimis/myIMDB-16.2" rel="noopener noreferrer" target="_blank">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>PlayerGame</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                            <CardActions border>
                                <a href="https://github.com/CzakoRamona/PlayerGame" rel="noopener noreferrer" target="_blank">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>My first IT project-DrBooBoo page</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                            <CardActions border>
                                <a href="https://github.com/CzakoRamona/DrBooBooProject" rel="noopener noreferrer" target="_blank">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>Hobbies</h1>
                    <div className="cards-container">
                        <Card shadow={5} style={{ width: 'auto', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Photo</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{ width: 'auto', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Drawing</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{ width: 'auto', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Dancing</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
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
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="cards-content"><h1>Guilty pleasures...</h1>
                    <div className="cards-container" >
                        {/* <Card shadow={5} style={{ minWidth: 'auto', margin: 'auto' }} >
                            <CardTitle style={{ color: " #c06c84 " }}>Coffee</CardTitle>
                            <CoffeeCarousel />
                        </Card> */}
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