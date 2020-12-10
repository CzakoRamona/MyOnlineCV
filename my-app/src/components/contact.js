import React, { Component } from "react";
import { Cell, Grid, List, ListItem, ListItemContent, Textfield, Button } from "react-mdl";
class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Get in touch</h2>
                        <p>Looking for a software development partner that will ROCK your business?That's me, anticipating the start of a new journey and challenge! Can't wait to meet you....</p>
                        <div className="contact-info">
                            <List>
                                <ListItem twoLine id="list-color">
                                    <ListItemContent style={{ fontWeight: 'bolder' }} avatar="person" subtitle="Czako Ramona-Stela">Name</ListItemContent>
                                </ListItem>
                                <ListItem twoLine id="list-color">
                                    <ListItemContent style={{ fontWeight: 'bolder' }} avatar="maped" subtitle="Cluj-Napoca, Str.Anton Pann 34-38">Adress</ListItemContent>
                                </ListItem>
                                <ListItem twoLine id="list-color">
                                    <ListItemContent style={{ fontWeight: 'bolder' }} avatar="mail" subtitle="drvizitiuramona@gmail.com">Email</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>

                    <Cell col={6}>
                        <h2>Message me</h2>
                        <div className="contact-form">
                            <form>
                                <Textfield
                                    onChange={() => { }}
                                    label="Name..."
                                    style={{ width: '75%' }}
                                />

                                <Textfield
                                    onChange={() => { }}
                                    pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                    error="Input is not valid!"
                                    label="Email..."
                                    style={{ width: '75%' }}
                                />
                                <Textfield
                                    onChange={() => { }}
                                    label="Subject..."
                                    style={{ width: '75%' }}
                                />
                                <Textfield
                                    onChange={() => { }}
                                    label="Describe project..."
                                    rows={2}
                                    style={{ width: '75%' }}
                                />
                                <Button raised accent ripple id="button-send">Send message</Button>
                            </form>
                        </div>
                    </Cell>
                    <div className="contact-font-glow">
                        <div className="glow-container">
                            <a href="https://www.facebook.com/vizitiu.ramonastela/?viewas=100000686899395" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-f" aria-hidden="true" />
                            </a>


                            <a href="https://www.instagram.com/vizitiu.ramona.stela" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>


                            <a href="https://linkedin.com/in/ramona-stela-dr-vizitiu-a4a347162" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>


                            <a href="https://github.com/CzakoRamona" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>


                            <a href="https://www.youtube.com/channel/UCh6BZhaxmhbrf0HNn08PYQA?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube" aria-hidden="true" />
                            </a>


                            <a href="drvizitiuramona@gmail" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Grid>


            </div>
        )
    }
}
export default Contact;