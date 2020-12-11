import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
class ShowOff extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div><h1>This is React</h1></div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Photos</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Dancing</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Drawing</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Photos</Tab>
                    <Tab>Dancing</Tab>
                    <Tab>Drawing</Tab>
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