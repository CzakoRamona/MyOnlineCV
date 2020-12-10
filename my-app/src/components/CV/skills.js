import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div stile={{ display: "flex" }}>
                        {this.props.skill}
                        <ProgressBar style={{ margin: "auto", widht: "75%" }} progress={this.props.progress} />{this.props.skillProgress}

                    </div>
                </Cell>


            </Grid>
        )
    }
}
export default Skills;