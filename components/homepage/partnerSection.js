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
      <div className="sponsor-row center" style={{ marginBottom: "50px" }}>
        <a href="https://www.coveo.com" alt="Deloitte">
          <img
            height="170"
            src="/static/images/sponsors/Coveo.jpg"
          />
        </a>
      </div>
      <Row>
        <h3 className="center" style={{ marginBottom: "50px" }}>
          Our Past Sponsors
        </h3>
      </Row>
      <Row>
        <div className="sponsor-row center">
          <a href="https://deloitte.com/" alt="Deloitte">
            <img
              height="25"
              src="/static/images/sponsors/deloitte.svg"
            />
          </a>
          <a href="https://www.morganstanley.com/" alt="Morgan Stanley">
            <img
              height="30"
              src="/static/images/sponsors/morgan_stanley.svg"
            />
          </a>
        </div>
      </Row>
      <Row>
        <div className="center partner-button">
          <a
            className={"link"}
            style={{ color: "#1f285f" }}
            href="mailto:finance.hack4impact@ssmu.ca"
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
        width: 400px;
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
