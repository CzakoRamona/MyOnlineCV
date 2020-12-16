import React, { Component } from "react";
import './HeaderBar.css';
import { Header, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
// import logo from "./logo.png";
class HeaderBar extends Component {
    render() {
        return (

            <Header className="header-color" title={<Link id="link-CV" to="/">My CV</Link>} scroll >
                <Navigation>
                    <Link className="link-shadow" to="/resume">Resume</Link>
                    <Link className="link-shadow" to="/aboutme">About Me</Link>
                    <Link className="link-shadow" to="/showOff">Show Off</Link>
                    <Link className="link-shadow" to="/contact">Contact</Link>
                </Navigation>
            </Header>

        )
    }
}
export default HeaderBar;