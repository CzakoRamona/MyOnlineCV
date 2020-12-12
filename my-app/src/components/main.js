import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import AboutMe from "./aboutme";
import ShowOff from "./showOff";
import Contact from "./contact";
import Resume from "./resume";
const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/showOff" component={ShowOff} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />

    </Switch>
)
export default Main;
