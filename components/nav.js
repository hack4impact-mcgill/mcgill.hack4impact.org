import React from "react";
import Link from "next/link";
import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav
} from "reactstrap";

class NavigationBar extends React.Component {
  state = {
    isTop: true,
    collapsed: true
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Navbar
        className={`navbar-expand-lg navbar-dark fixed-top ${this.state.isTop ? "" : "shadow bg-white"
          }`}
        id={this.props.navType ? this.props.navType : "mainNav"}
      >
        <Container>
          <NavbarBrand className="js-scroll-trigger" href="/">
            <img
              id="logo-img"
              height="50"
              width="185"
              src="/static/images/Group 17.svg"
              alttext="Hack4Impact McGill logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse navbar isOpen={!this.state.collapsed}>
            <Nav navbar className="text-lowercase ml-auto nav-text">
              <NavItem>
                <Link href="/about">
                  <a className="nav-link pl-3 nav-text">About</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/projects">
                  <a className="nav-link pl-3 nav-text">Projects</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/apply">
                  <a className="nav-link pl-3 nav-text">Apply</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <style jsx global>{`
  .nav-link.nav-text {
    font-size: 16px !important;
    font-weight: 700 !important;
    font-color: #657788 !important;
  }
`}</style>
      </Navbar>
    );
  }
}

export default NavigationBar;
