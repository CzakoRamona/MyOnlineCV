import React, { Component } from "react";
import './FooterBar.css';
import { Footer, FooterLinkList, FooterSection } from "react-mdl";
class FooterBar extends Component {
  render() {
    return (
      <Footer size="mini" className="footer">
        <FooterSection type="left" logo="My CV">
          <FooterLinkList>
            <a href="mailto:drvizitiuramona@gmail" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
            <a href="/">Copyright &copy; 2021 Czako Ramona-Stela </a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    )
  }
}
export default FooterBar;