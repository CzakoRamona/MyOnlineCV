import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme-container">
                <Grid className="about-grid">
                    <div id="sky-container">
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                    </div>
                    <Cell col={4} className="about-left">
                        <p>I enjoy turning complex problems into simple, beautiful and
                        intuitive designs.
                        When I'm not coding, tweeting or pushing pixels,
                        you'll find me dancing, drawing, day dreaming, cooking, gardening or singing.</p>
                        <p> I like to hear what you want and imagine in your project and  make your dreams come truth, in a creative and inspired mode.
                        I bring great ideas to life.</p>
                    </Cell>
                    <Cell col={8} className="about-right">
                        <p>“Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.”
– Ashley Smith </p>
                        <p>
                            “You are never too old to set another goal or to dream a new dream.”
– C.S. Lewis</p>
                        <p>When life give's you lemons... make a lemonade or lemon cake?</p>

                        <p>I studied and learned to bee a pediatrician,but in this pandemic times I rediscovered me, in creating beutifull web designs</p>
                        <pre>
                            Here are a few technologies I've been working with recently:
                            <br />      * JavaScript (ES6+)
                            <br />      * HTML & CSS
                            <br />      * React
                            <br />      * Node.js
                        </pre>
                    </Cell>


                </Grid>
            </div>
        )
    }
}
export default AboutMe;