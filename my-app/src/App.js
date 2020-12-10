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
          <Header className="header-color" title={<Link to="/">My CV</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/showOff">Show Off</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link to="/">My CV</Link>} className="drawer-color">
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
          <Footer size="mini">
            <FooterSection type="left" logo="My CV">
              <FooterLinkList>
                <a href="/">Help</a>
                <a href="/">Privacy & Terms|Copyright &copy; 2020 </a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>

    );
  }
}

export default App;
