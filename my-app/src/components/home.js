import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src="me.jpg"
                            alt="me"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;