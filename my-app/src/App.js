import React, { Component } from "react";
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import ShowOff from "./showOff";
import Contact from "./contact";
import Resume from "./resume";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link id="link-CV" to="/">My CV</Link>} scroll>
            <Navigation>
              <Link className="link-shadow" to="/resume">Resume</Link>
              <Link className="link-shadow" to="/aboutme">About Me</Link>
              <Link className="link-shadow" to="/showOff">Show Off</Link>
              <Link className="link-shadow" to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link id="link-CV" to="/">My CV</Link>} className="drawer-color">
            <Navigation >
              <Link className="nav-drawer" to="/resume">Resume</Link>
              <Link className="nav-drawer" to="/aboutme">About Me</Link>
              <Link className="nav-drawer" to="/showOff">Show Off</Link>
              <Link className="nav-drawer" to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/showOff" component={ShowOff} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" component={Resume} />
            </Switch>
          </Content>
          <Footer size="mini" className="footer">
            <FooterSection type="left" logo="My CV">
              <FooterLinkList>
                <a href="/">Help</a>
                <a href="/">Privacy & Terms|Copyright &copy; 2020 </a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout >
      </div >

    );
  }
}

export default App;
