import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const Footer = () => (
  <section className="footer-section">
    <Container>
      <Row>
        <Col md="5" xs="12" className="footer-left-div">
          <div className="footer-logo-box">
            <img src="/static/images/h4i_white.png" height="35" width="200" />
          </div>
          <p>
            For all inquiries of partnership or sponsorship, please contact us
            at{' '}
            <a href="mailto:hack4impact@ssmu.ca">
            hack4impact@ssmu.ca
            </a>
            .
          </p>
        </Col>
        <div className="col-md-1" />
        <div className="col-md-2 ">
          <h4>ORGANIZATION</h4>
          <ul>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="../static/sponsorship.pdf">
                <a>Sponsorship</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h4>EXTRAS</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/hack4impactmcgill/">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/hack4impact-mcgill">Github</a>
            </li>
            <li>
              <a href="mailto:hack4impact@ssmu.ca">Email</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h4>APPLY</h4>
          <ul>
            <li>
              <Link href="/apply">
                <a>Apply</a>
              </Link>
            </li>
            <li>
              <Link href="/apply/students">
                <a>Students</a>
              </Link>
            </li>
            <li>
              <Link href="/apply/nonprofits">
                <a>Non-profits</a>
              </Link>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
    <style jsx>{`
      section {
        background-color: #1f285f;
        min-height: 350px;
        padding-top: 70px !important;
      }
      .footer-section {
        background-color: #1f285f;
        min-height: 350px;
        padding-top: 70px !important;
      }

      .footer-section h4 {
        font-size: 15px;
        color: #e1e1e1;
        text-align: left;
        padding-bottom: 9px;
      }

      .footer-section ul {
        list-style-type: none;
        text-align: left;
        padding: 0;
      }

      .footer-section li {
        font-size: 15px;
        padding-bottom: 5px;
      }

      .footer-logo-box {
        padding-bottom: 20px;
      }

      .footer-section a {
        color: #8e8d8a;
      }

      .footer-section a:hover {
        color: #d9d9d9;
      }

      .footer-left-div {
        padding-bottom: 30px;
      }

      .footer-section p {
        color: #d9d9d9;
      }
    `}</style>
  </section>
);

export default Footer;
