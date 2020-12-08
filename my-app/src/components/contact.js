import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <Grid className="contact-grid">
                    <Cell col={6}>half page</Cell>
                    <Cell col={6}>half page</Cell>
                </Grid>

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
            </div>
        )
    }
}
export default Contact;