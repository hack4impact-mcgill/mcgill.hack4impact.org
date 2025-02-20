import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Spring, config } from "react-spring";
import ActionButton from "../actionButton";

const Banner = () => (
  <Container
    fluid
    className="bannerCont"
    style={{ 
      marginTop: "10px", 
      marginBottom: "30px", 
      height: "100vh", 
      backgroundImage: "url('/static/images/Desktop2.svg')",
      maxWidth: "100%",        // Changed from 1200px to 100%
      width: "100%",           // Added this
      backgroundSize: "cover", // Added this
      backgroundPosition: "center", // Added this
      backgroundRepeat: "no-repeat"
    }}
  >
    <Row>
      
      <Col md="5">
        <Spring
          config={{ delay: 450, ...config.slow }}
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
        >
          {props => (
            <div style={props} id="homepage-main-headline">
              <h1>hack4impact </h1>
            </div>
          )}
        </Spring>
        <Spring
          config={{ delay: 450, ...config.slow }}
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
        >
          {props => (
            <div style={props} id="homepage-main-headline2">
              <h1>mcgill </h1>
            </div>
          )}
        </Spring>
        <Spring
          config={{ delay: 450, ...config.slow }}
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 100, transform: "translate3d(0,0p</div>x,0)" }}
        >
          {props => (
            <div style={props} id="homepage-sub-headline">
              <p>
                software for non-profits
              </p>
            </div>
          )}
        </Spring>
      </Col>
    </Row>
    <style jsx>
      {`
        @media (max-width: 768px) {
          .banner-section {
            background-size: contain;
          }
        }
        .bannerCont {
          max-width: 1500px;
          margin: 0px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          margin-top: 30px;
        }
        .banner-img {
          width: 100%;
          height: auto;
        }
        .banner-section {
          height: 650px;
          padding-top: 150px;
          background-size: cover;
        }

        .cta-box {
          padding-top: 7px;
          align-content: left;
        }

        #main-banner-headline {
          margin-bottom: 24px;
          font-family: "Hanken Grotesk", sans-serif;
        }

        #homepage-main-headline h1 {
          font-size: 80px !important;
          font-weight: bold;
          margin-bottom: -15px;
          margin-top: 300px;
          color: #fff;
          font-family: "Hanken Grotesk", sans-serif;
          margin-left: 20px;
        }

        #homepage-main-headline2 h1 {
          font-size: 80px !important;
          margin-top: 0;
          font-weight: bold;
          color: #F2594B;
          font-family: "Hanken Grotesk", sans-serif;
          margin-left: 20px;
        }

        #homepage-sub-headline p {
          font-size: 30px;
          margin-bottom: 28px;
          color: #fff;
          font-weight: 350;
          margin-left: 20px;
        }
      `}
    </style>
  </Container>
);

export default Banner;
