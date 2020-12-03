import Section from "../section";
import { Container, Row, Col, Button } from "reactstrap";
import ActionLink from "../actionLink";

export default () => (
  <Section className="partners-section">
    <Container>
      <Row>
        <h1 className="section-title center" style={{ marginBottom: "50px" }}>
          Our Sponsors
        </h1>
      </Row>
      <div className="sponsor-row">
        <a href="https://deloitte.com/" alt="Deloitte">
          <img
            height="75"
            src="/static/images/sponsors/deloitte.svg"
            className="center"
          />
        </a>
        <a href="https://www.morganstanley.com/" alt="Morgan Stanley">
          <img
            height="95"
            src="/static/images/sponsors/morgan_stanley.svg"
            className="center"
          />
        </a>
      </div>
      <Row>
        <div className="center partner-button">
          <a
            className={"link"}
            style={{ color: "#1f285f" }}
            href="mailto:vpsponsorship.hack4impact@mcgilleus.ca"
          >
            Partner With Us
          </a>
        </div>
      </Row>
    </Container>
    <style jsx>{`
      .partners-section h2 {
        font-size: 20px;
        text-align: center;
        margin-bottom: 50px;
        color: #373f46;
        opacity: 0.7;
        font-weight: 300;
      }
      .partner-button {
        margin-top: 30px !important;
      }
      .sponsor-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 65px;
      }
      .link {
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: normal;
        font-size: 15px;
        margin: auto;
        margin-top: 40px;
        border-bottom: 1px solid #3f46ad;
      }
    `}</style>
  </Section>
);
