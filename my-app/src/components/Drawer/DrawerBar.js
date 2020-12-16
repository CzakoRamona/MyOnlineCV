import React, { Component } from "react";
import './DrawerBar.css';
import { Drawer, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
class DrawerBar extends Component {
    render() {
        return (

            <Drawer title={<Link id="link-CV" to="/">My CV</Link>} className="drawer-color">
                <Navigation >
                    <Link className="nav-drawer" to="/Resume">Resume</Link>
                    <Link className="nav-drawer" to="/AboutMe">About Me</Link>
                    <Link className="nav-drawer" to="/ShowOff">Show Off</Link>
                    <Link className="nav-drawer" to="/Contact">Contact</Link>
                </Navigation>
            </Drawer>

        )
    }
}
export default DrawerBar;