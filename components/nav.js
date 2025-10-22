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
import Image from "next/image";

class NavigationBar extends React.Component {
  state = { collapsed: true };

  toggleNavbar = () => this.setState(s => ({ collapsed: !s.collapsed }));

  render() {
    return (
      <Navbar
        expand="lg"                 /* adds .navbar-expand-lg        */
        fixed="top"                 /* adds .fixed-top               */
        light                       /* adds .navbar-light            */
        className="bg-white shadow" /* solid white background        */
        id={this.props.navType || "mainNav"}
      >
        <Container>
          <NavbarBrand tag="div" className="p-0">
            <Link href="/" legacyBehavior>
              <a className="navbar-brand-link" aria-label="Hack4Impact McGill home">
                <Image
                  id="logo-img"
                  height={50}
                  width={185}
                  src="/static/images/Group 17.svg"
                  alt="Hack4Impact McGill logo"
                  priority
                />
              </a>
            </Link>
          </NavbarBrand>

          <NavbarToggler
            onClick={this.toggleNavbar}
            aria-label="Toggle navigation"
            className="mr-2"
          />

          <Collapse navbar isOpen={!this.state.collapsed}>
            <Nav navbar className="ml-auto">
              {[
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/apply", label: "Apply" }
              ].map(link => (
                <NavItem key={link.href}>
                  <Link href={link.href} legacyBehavior>
                    <a className="nav-link nav-text px-3">{link.label}</a>
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>

        <style jsx global>{`
          .nav-link.nav-text {
            font-size: 16px !important;
            font-weight: 700 !important;
            color: #657788 !important; /* use “color”, not “font-color” */
          }
          .navbar-brand-link {
            display: inline-flex;
            align-items: center;
          }
          .navbar-brand-link:focus-visible {
            outline: 3px solid #1f285f;
            outline-offset: 3px;
            border-radius: 4px;
          }
        `}</style>
      </Navbar>
    );
  }
}

export default NavigationBar;
