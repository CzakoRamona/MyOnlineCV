import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="me-image" >
                        </div>
                        <div className="banner-text">
                            <h2>Hello, my name is<h1>Czako Ramona-Stela</h1></h2>
                            <p>I'm a developer!</p>
                            <Button raised accent ripple id="button-hire">Hire me</Button>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;