import React, { Component } from "react";
import './FooterBar.css';
import { Footer, FooterLinkList, FooterSection } from "react-mdl";
class FooterBar extends Component {
  render() {
    return (
      <Footer size="mini" className="footer">
        <FooterSection type="left" logo="My CV">
          <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms|Copyright &copy; 2020 </a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    )
  }
}
export default FooterBar;