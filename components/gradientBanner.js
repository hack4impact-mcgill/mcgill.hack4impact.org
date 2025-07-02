import { Container, Row, Col } from "reactstrap";
import { Spring, config } from "react-spring";
import ActionButton from "./actionButton";

const GradientBanner = ({
  title,
  subHeadline,
  style,
  buttonText,
  buttonLink,
  color,
  arrow,
  minorButtonText,
  minorButtonLink
}) => (
  <div>
    <section className="banner-section" style={style}>
      <Container className="align-middle">
        <Row>
          <Col md="12" className="text-center">
            <Spring
              config={{ delay: 700, ...config.molasses }}
              from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
              to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
            >
              {props => (
                <div style={props} className="main-headline">
                  <h1>{title}</h1>
                </div>
              )}
            </Spring>
          </Col>
          <Row>
            <Spring
              config={{ delay: 500, ...config.molasses }}
              from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
              to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
            >
              {props => (
                <div style={props} className="text-center sub-headline">
                  <p>{subHeadline}</p>
                </div>
              )}
            </Spring>
          </Row>
          <Col md="12" className="text-center">
            {buttonText !== undefined ? (
              <Spring
                config={{ delay: 550, ...config.molasses }}
                from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
                to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
              >
                {props => (
                  <div style={props} className="d-inline">
                    <ActionButton text={buttonText} link={buttonLink} white />
                  </div>
                )}
              </Spring>
            ) : null}
            {minorButtonText !== undefined ? (
              <Spring
                config={{ delay: 550, ...config.molasses }}
                from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
                to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
              >
                {props => (
                  <div style={props} className="d-inline ml-3">
                    <ActionButton
                      text={minorButtonText}
                      link={minorButtonLink}
                    />
                  </div>
                )}
              </Spring>
            ) : null}
          </Col>
        </Row>
      </Container>
    </section>
    {arrow && <div className="arrow" />}
    <style jsx>{`
      section {
        background: radial-gradient(
          #252956,
          ${color !== undefined ? color : "#252956"}
        );
        margin-top: 16px;
        padding: 8% 0;
      }

      @media (max-width: 990px) {
        section {
          padding: 20% 0;
        }
      }
      .main-headline h1 {
        font-size: 60px !important;
        font-weight: 600;
        color: #ffffff;
        font-family: "Hanken Grotesk", sans-serif;
      }
      .sub-headline {
        max-width: 100%;
        padding: 0 10%;
        margin-top: 20px;
      }
      p {
        font-size: 20px;
        margin-bottom: 28px auto;
        color: #fff;
      }
      .arrow {
        margin: auto;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-top: 60px solid #252956;
      }
    `}</style>
  </div>
);

export default GradientBanner;
