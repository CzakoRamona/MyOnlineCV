import React, { Component } from "react";
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import ShowOff from "./pages/ShowOff/ShowOff";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link id="link-CV" to="/">My CV</Link>} scroll>
            <Navigation>
              <Link className="link-shadow" to="/Resume">Resume</Link>
              <Link className="link-shadow" to="/AboutMe">About Me</Link>
              <Link className="link-shadow" to="/ShowOff">Show Off</Link>
              <Link className="link-shadow" to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link id="link-CV" to="/">My CV</Link>} className="drawer-color">
            <Navigation >
              <Link className="nav-drawer" to="/Resume">Resume</Link>
              <Link className="nav-drawer" to="/AboutMe">About Me</Link>
              <Link className="nav-drawer" to="/ShowOff">Show Off</Link>
              <Link className="nav-drawer" to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>
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
