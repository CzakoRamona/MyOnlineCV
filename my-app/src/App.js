import React, { Component } from "react";
import './App.css';
import { Layout, Content } from "react-mdl";
import { Switch, Route } from "react-router-dom";
import HeaderBar from "./components/Header/HeaderBar";
import DrawerBar from "./components/Drawer/DrawerBar";
import FooterBar from "./components/Footer/FooterBar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import ShowOff from "./pages/ShowOff/ShowOff";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <HeaderBar />
          <DrawerBar />
          <Content>
            <div className="page-content" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/AboutMe" component={AboutMe} />
              <Route path="/ShowOff" component={ShowOff} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Resume" component={Resume} />
            </Switch>
          </Content>
          <FooterBar />
        </Layout >
      </div >

    );
  }
}

export default App;
