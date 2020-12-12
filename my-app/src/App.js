import React, { Component } from "react";
import { render } from "react-dom";
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";
import Main from "./components/main";
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
            <Main />
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
