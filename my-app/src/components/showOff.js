import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
class ShowOff extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
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
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>
        )
    }
}
export default ShowOff;