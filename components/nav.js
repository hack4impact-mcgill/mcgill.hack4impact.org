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
        className={`navbar-expand-lg navbar-dark fixed-top ${
          this.state.isTop ? "" : "shadow bg-white"
        }`}
        id={this.props.navType ? this.props.navType : "mainNav"}
      >
        <Container>
          <NavbarBrand className="js-scroll-trigger" href="/">
            <img
              id="logo-img"
              height="50"
              width="185"
              src="/static/images/hack4impact-mcgill-logo-long-light.png"
              alttext="Hack4Impact McGill logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse navbar isOpen={!this.state.collapsed}>
            <Nav navbar className="text-uppercase ml-auto">
              <NavItem>
                <Link href="/about">
                  <a className="nav-link pl-3">About</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/projects">
                  <a className="nav-link pl-3">Projects</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/apply">
                  <a className="nav-link pl-3">Apply</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <style jsx>{`
          .bg-white {
            background-color: #ffffff;
          }
        `}</style>
      </Navbar>
    );
  }
}

export default NavigationBar;
