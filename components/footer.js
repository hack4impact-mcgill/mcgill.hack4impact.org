import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
  <section className="footer-section">
    <Container>
      <Row>
        <Col md="5" xs="12" className="footer-left-div">
          <div className="footer-logo-box">
            <Image
              src="/static/images/h4i_white.png"
              height={35}
              width={200}
              alt="Hack4Impact McGill wordmark"
            />
          </div>
          <p>
            For all inquiries of partnership or sponsorship, please contact us
            at{' '}
            <a href="mailto:hack4impact@ssmu.ca" className="footer-link">
              hack4impact@ssmu.ca
            </a>
            .
          </p>
        </Col>
        <div className="col-md-1" />
        <div className="col-md-2 ">
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <Link href="/about" className="footer-link">About Us</Link>
            </li>
            <li>
              <Link href="/projects" className="footer-link">Projects</Link>
            </li>
            <li>
              <Link href="/static/sponsorship.pdf" className="footer-link">Sponsorship</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h4>CONNECT</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/hack4impactmcgill/" className="footer-link">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/hack4impactmcgill/" className="footer-link">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/hack4impact-mcgill" className="footer-link">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/hack4impact-mcgill" className="footer-link">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:hack4impact@ssmu.ca" className="footer-link">Email</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h4>APPLY</h4>
          <ul>
            <li>
              <Link href="/apply" className="footer-link">Apply</Link>
            </li>
            <li>
              <Link href="/apply/students" className="footer-link">Students</Link>
            </li>
            <li>
              <Link href="/apply/nonprofits" className="footer-link">Non-profits</Link>
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
        color: #ffffff;
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

      :global(.footer-link) {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        color: #ffffff;
        text-decoration: none;
        transform: translateX(0);
        transition: transform 0.18s ease, color 0.18s ease;
      }

      :global(.footer-link::before) {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 1px;
        background: #ffffff;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.18s ease;
      }

      :global(.footer-link::after) {
        content: ">";
        opacity: 0;
        transform: translateX(-4px);
        transition: opacity 0.18s ease, transform 0.18s ease;
      }

      :global(.footer-link:hover) {
        color: #ffffff;
        transform: translateX(6px);
      }

      :global(.footer-link:hover::before) {
        transform: scaleX(1);
      }

      :global(.footer-link:hover::after) {
        opacity: 1;
        transform: translateX(0);
      }

      .footer-left-div {
        padding-bottom: 30px;
      }

      .footer-section p {
        color: #ffffff;
      }
    `}</style>
  </section>
);

export default Footer;
